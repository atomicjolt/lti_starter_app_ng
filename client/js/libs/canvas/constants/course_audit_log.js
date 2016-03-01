//
// Course Audit log
//
// Query by course.
// List course change events for a given course.
//
// API Docs: https://canvas.instructure.com/doc/api/course_audit_log.html
// API Url: audit/course/courses/{course_id}
//
// Example:
// const query = {
//   start_time
//   end_time
// }
// return canvasRequest(query_by_course, {course_id}, query);
export const query_by_course = { type: "QUERY_BY_COURSE", method: "get", reducer: 'course_audit_log'};