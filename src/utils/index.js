export function formatTimeWithSymbol(ts, symbol) {
  const date = new Date(ts);
  const year = date.getFullYear();
  let month = parseInt(date.getMonth()) + 1;
  let day = date.getDate();
  let minute = date.getMinutes();
  const hour = date.getHours();
  if (parseInt(minute) < 10) {
    minute = '0' + minute;
  }
  if(month < 10) month = `0${month}`
  if(day < 10) day = `0${day}`
  return year + symbol + month + symbol + day
}

export function formatTime(ts) {
  const date = new Date(ts);
  const year = date.getFullYear();
  const month = parseInt(date.getMonth()) + 1;
  const day = date.getDate();
  let minute = date.getMinutes();
  const hour = date.getHours();
  if (parseInt(minute) < 10) {
    minute = '0' + minute;
  }
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
}