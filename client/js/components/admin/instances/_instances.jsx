import React                from 'react';
import { connect }          from 'react-redux';
import Modal                from 'react-modal';
import InstanceHeader       from './instance_header';
import Search               from '../common/search';
import InstanceList         from './instance_list';
import * as InstanceActions from '../../../actions/instances';

const select = state => ({
  instances: state.instances,
  ltiApplications: state.ltiApplications,
});

export class BaseInstances extends React.Component {
  static propTypes = {
    instances: React.PropTypes.shape({}).isRequired,
    getInstances: React.PropTypes.func.isRequired,
    ltiApplications: React.PropTypes.shape({}).isRequired,
    params: React.PropTypes.shape({
      applicationId: React.PropTypes.string.isRequired,
    }).isRequired
  };

  static getStyles() {
    return {
      modal: {
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {

        }
      }
    };
  }

  constructor() {
    super();
    this.state = { modalOpen: false };
  }

  componentWillMount() {
    this.props.getInstances(this.props.params.applicationId);
  }

  // search(searchText) {
  //   // TODO: write me
  // }

  // newInstance() {
  //   // TODO: write me
  // }

  render() {
    const styles = BaseInstances.getStyles();
    return (
      <div className="o-contain o-contain--full">
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={() => {}}
          onRequestClose={() => this.setState({ modalOpen: false })}
          style={styles.modal}
          contentLabel="Modal"
        >
          <h1>Attendance</h1>
        </Modal>
        <InstanceHeader
          openSettings={() => {}}
          newInstance={() => this.setState({ modalOpen: true })}
          instance={this.props.ltiApplications[this.props.params.applicationId]}
        />
        <Search
          search={() => {}}
        />
        <InstanceList
          instances={this.props.instances}
        />
      </div>
    );
  }
}

export default connect(select, InstanceActions)(BaseInstances);
