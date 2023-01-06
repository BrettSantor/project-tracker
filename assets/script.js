var dateTime = $('#hero')

function displayTime() {
    dateTime.text(dayjs().format('MMMM ddd YYYY hh:mm:ss'))
};
displayTime();
setInterval(displayTime, 1000);