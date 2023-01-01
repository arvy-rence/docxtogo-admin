import moment from "moment";

// subtract 8 hrs from given date
export const adjustDateTime = (date) => {
  return moment(date).subtract(8, "hours").format('MMM Do YYYY, HH:mm');
}