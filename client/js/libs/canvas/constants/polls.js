//
// Polls
//
// List polls
// Returns the list of polls for the current user.
//
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls
//
// Example:
// return canvasRequest(list_polls, {});
export const list_polls = { type: "LIST_POLLS", method: "get", reducer: 'polls'};

// Get a single poll
// Returns the poll with the given id
//
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls/{id}
//
// Example:
// return canvasRequest(get_single_poll, {id});
export const get_single_poll = { type: "GET_SINGLE_POLL", method: "get", reducer: 'polls'};

// Create a single poll
// Create a new poll for the current user
//
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls
//
// Example:
// const query = {
//   polls[question] (required)
//   polls[description]
// }
// return canvasRequest(create_single_poll, {}, query);
export const create_single_poll = { type: "CREATE_SINGLE_POLL", method: "post", reducer: 'polls'};

// Update a single poll
// Update an existing poll belonging to the current user
//
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls/{id}
//
// Example:
// const query = {
//   polls[question] (required)
//   polls[description]
// }
// return canvasRequest(update_single_poll, {id}, query);
export const update_single_poll = { type: "UPDATE_SINGLE_POLL", method: "put", reducer: 'polls'};

// Delete a poll
// <b>204 No Content</b> response code is returned if the deletion was successful.
//
// API Docs: https://canvas.instructure.com/doc/api/polls.html
// API Url: polls/{id}
//
// Example:
// return canvasRequest(delete_poll, {id});
export const delete_poll = { type: "DELETE_POLL", method: "delete", reducer: 'polls'};