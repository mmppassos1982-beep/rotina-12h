const calcBtn = document.getElementById('calcBtn');
const startTimeInput = document.getElementById('startTime');
const statusText = document.getElementById('status');

calcBtn.addEventListener('click', function() {
  const inputVal = startTimeInput.value;

  if (!inputVal) {
    statusText.textContent = "Escolha um horário!";
    return;
  }

  const hour = parseInt(inputVal.split(":")[0]);
  const minute = parseInt(inputVal.split(":")[1]);

  const start = new Date();
  start.setHours(hour);
  start.setMinutes(minute);
  start.setSeconds(0);

  const end = new Date(start.getTime() + 12 * 60 * 60 * 1000);

  statusText.textContent = end.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
});