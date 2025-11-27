export const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  month = month >= 10 ? month : `0${month}`;
  date = date >= 10 ? date : `0${date}`;

  return `${year}-${month}-${date}`;
};
