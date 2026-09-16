const channels = Array.from({length: 6}, (_, i) => ({id: i + 1, name: `Channel ${i + 1}`, state: false}));
const grid = document.getElementById('channelGrid');
const activeCount = document.getElementById('activeCount');

function render() {
  grid.innerHTML = channels.map(channel => `
    <article class="channel ${channel.state ? 'on' : ''}">
      <div class="channel-head">
        <span class="channel-number">CH ${String(channel.id).padStart(2, '0')}</span>
        <span class="status">${channel.state ? 'ON' : 'OFF'}</span>
      </div>
      <div class="channel-name">${channel.name}</div>
      <div class="channel-sub">Virtual relay output</div>
      <button class="switch" data-id="${channel.id}" aria-pressed="${channel.state}">${channel.state ? 'TURN OFF' : 'TURN ON'}</button>
    </article>
  `).join('');
  const on = channels.filter(c => c.state).length;
  activeCount.textContent = `${on} / 6 ON`;
}

grid.addEventListener('click', event => {
  const button = event.target.closest('.switch');
  if (!button) return;
  const channel = channels.find(c => c.id === Number(button.dataset.id));
  if (!channel) return;
  channel.state = !channel.state;
  // Cloud/ESP32 command transport will be connected in the next phase.
  render();
});

document.getElementById('allOff').addEventListener('click', () => {
  channels.forEach(channel => channel.state = false);
  render();
});

render();
