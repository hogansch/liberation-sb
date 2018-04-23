const events = document.querySelector('#events')
const viewArea = document.querySelector(".view-area")
const eventClick = events.addEventListener('click', () => {
  viewArea.style.backgroundImage = 'none';
});
