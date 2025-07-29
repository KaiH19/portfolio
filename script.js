// Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active class
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Modal Logic
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const projectId = btn.getAttribute('data-project');

    let content = '';

    switch(projectId) {
      case 'la-liga':
        content = `
          <h3>Forecasting La Liga Winners</h3>
          <p>Used MLP and Random Forests to predict La Liga champions from 10 years of player and match data. Integrated Elo ratings and team stats. Deployed with Dash and Render for simulation.</p>
        `;
        break;
      case 'fleet':
        content = `
          <h3>Fleet Management Dashboard</h3>
          <p>Full-stack dashboard using Node.js, WebSockets, MongoDB, and MapLibre for GPS. Real-time updates and maintenance alerts with telemetry simulation.</p>
        `;
        break;
      case 'auction':
        content = `
          <h3>Online Auction System</h3>
          <p>Built with ASP.NET Core, Angular, and SignalR. Real-time bidding, live updates, Redis caching, PostgreSQL backend, and secure login/authentication features.</p>
        `;
        break;
    }

    modalBody.innerHTML = content;
    modal.style.display = 'block';
  });
});

// Close Modal
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target == modal) modal.style.display = 'none';
});
