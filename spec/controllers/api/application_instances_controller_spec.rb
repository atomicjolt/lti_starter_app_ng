require "rails_helper"

RSpec.describe Api::ApplicationInstancesController, type: :controller do
  before do
    setup_lti_users
    setup_application_and_instance
  end

  context "no jwt" do
    describe "GET index" do
      it "returns unauthorized" do
        get :index, params: { application_id: @application.id }, format: :json
        expect(response).to have_http_status(401)
      end
    end
  end

  context "as user" do
    before do
      request.headers["Authorization"] = @user_token
    end

    describe "GET index" do
      it "returns unauthorized" do
        get :index, params: { application_id: @application.id }, format: :json
        expect(response).to have_http_status(401)
      end
    end

    describe "GET show" do
      it "returns unauthorized" do
        get :show, params: { id: @application_instance.id, application_id: @application.id }, format: :json
        expect(response).to have_http_status(401)
      end
    end

    describe "GET check_auth" do
      it "returns unauthorized" do
        authentication = FactoryBot.create(:authentication)
        get :check_auth, params: {
          application_id: @application.id,
          id: @application_instance.id,
          authentication_id: authentication.id,
        }, format: :json
        expect(response).to have_http_status(401)
      end
    end
  end

  context "as admin" do
    before do
      request.headers["Authorization"] = @admin_token
    end

    describe "GET index" do
      it "renders all application instances as json" do
        get :index, params: { application_id: @application.id }, format: :json
        expect(response).to have_http_status(200)
      end
    end

    describe "GET show" do
      it "renders specific application instances as json" do
        Apartment::Tenant.switch(@application_instance.tenant) do
          FactoryBot.create(:authentication, application_instance: @application_instance)
        end
        get :show, params: { id: @application_instance.id, application_id: @application.id }, format: :json
        expect(response).to have_http_status(200)
        json = JSON.parse(response.body)
        expect(json["authentications"].length).to eq(1)
      end
    end

    describe "GET check_auth" do
      it "renders all accounts the auth object has access to" do
        authentication = Apartment::Tenant.switch(@application_instance.tenant) do
          FactoryBot.create(:authentication, application_instance: @application_instance)
        end
        get :check_auth, params: {
          application_id: @application.id,
          id: @application_instance.id,
          authentication_id: authentication.id,
        }, format: :json
        expect(response).to have_http_status(200)
      end
    end

    describe "GET create" do
      it "creates a new application instances and returns json" do
        site = FactoryBot.create(:site)
        attrs = {
          lti_key: "test-key",
          site_id: site.id,
        }
        post :create,
             params: {
               application_id: @application.id,
               application_instance: attrs,
             },
             format: :json
        expect(response).to have_http_status(200)
      end
    end

    describe "PUT update" do
      it "Updates the application instance" do
        put :update,
            params: {
              application_id: @application.id,
              id: @application_instance.id,
              application_instance: {
                lti_secret: "12345",
              },
            },
            format: :json
        expect(response).to have_http_status(200)
      end
      it "Updates the application instance config_xml" do
        put :update,
            params: {
              application_id: @application.id,
              id: @application_instance.id,
              application_instance: {
                lti_secret: "12345",
                lti_config: {
                  title: "LTI Starter App",
                  privacy_level: "anonymous",
                  icon: "oauth_icon.png",
                  course_navigation: {
                    text: "LTI Starter App",
                    visibility: "public",
                  },
                },
              },
            },
            format: :json
        expect(response).to have_http_status(200)
        result = JSON.parse(response.body)
        xml = result["lti_config_xml"]
        expect(xml).to include('<lticm:property name="privacy_level">anonymous</lticm:property>')
      end
    end

    describe "DEL destroy" do
      it "Deletes the application instance" do
        delete :destroy,
               params: {
                 application_id: @application.id,
                 id: @application_instance.id,
               },
               format: :json
        expect(response).to have_http_status(200)
      end
    end
  end
end
