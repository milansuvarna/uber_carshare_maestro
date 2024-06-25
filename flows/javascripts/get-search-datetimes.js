const today = new Date();
const locale = 'en-au';
// const monthYearFormat = {month: 'long', year: 'numeric'};
// const dayFormat = {day: 'numeric'};
// const dayMonthFormat = {day: 'numeric', month: 'short'};
const monthNamesLong = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];
const monthNamesShort = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]; // check Sep!

// Set start date to 24 hours from now
const startDatetime = new Date(today.getTime() + 1000 * 60 * 60 * 24);
const startMonthLong = monthNamesLong[startDatetime.getMonth()];
const startMonthShort = monthNamesShort[startDatetime.getMonth()];
output.startMonthYear = `${startMonthLong} ${startDatetime.getFullYear()}`
output.startDayOfMonth = startDatetime.getDate().toString();
output.startDayMonth = `${output.startDayOfMonth} ${startMonthShort}`

// Set end date to 48 hours from now (1 day after start date)
// However, note that hours selected are 6am to 11pm by default.
const endDatetime = new Date(today.getTime() + 1000 * 60 * 60 * 53);
const endMonthLong = monthNamesLong[endDatetime.getMonth()];
const endMonthShort = monthNamesShort[endDatetime.getMonth()];
output.endMonthYear = `${endMonthLong} ${endDatetime.getFullYear()}`
output.endDayOfMonth = endDatetime.getDate().toString();
output.endDayMonth = `${output.endDayOfMonth} ${endMonthShort}`
