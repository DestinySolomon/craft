
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    counter.innerText = '$0';
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace(/[$+,]/g, '');
      const increment = target / 200;

      if (count < target) {
        counter.innerText = (count + increment).toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).replace(/^/, target >= 1000000 ? '$' : '');
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = (target).toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).replace(/^/, target >= 1000000 ? '$' : '');
      }
    };
    updateCount();
  });

const nftCards = document.querySelectorAll('.nft-card');
  const modal = new bootstrap.Modal(document.getElementById('nftModal'));

  nftCards.forEach(card => {
    card.addEventListener('click', () => {
      document.getElementById('nftName').textContent = card.dataset.name;
      document.getElementById('nftImage').src = card.dataset.image;
      document.getElementById('nftPrice').textContent = card.dataset.price;
      document.getElementById('nftCategory').textContent = card.dataset.category;
      document.getElementById('nftDescription').textContent = card.dataset.description;
      document.getElementById('nftOwner').src = card.dataset.owner;
      document.getElementById('nftChart').src = card.dataset.chart;
    });
  });