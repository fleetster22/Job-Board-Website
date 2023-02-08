const featuredJobsList = document.getElementById('.featured-jobs');
const keywordInput = document.getElementById('#keywords');
const locationInput = document.getElementById('#location');
const filterButton = document.getElementById('filter-button');

filterButton.addEventListener('click', () => {
  const keyword = keywordInput.value.toLowerCase();
  const location = locationInput.value.toLowerCase();

  featuredJobsList.innerHTML = '';

  for (const job of jobs) {
    if (job.title.toLowerCase().includes(keyword) || job.description.toLowerCase().includes(keyword) || job.location.toLowerCase().includes(keyword) || job.company.toLowerCase().includes(keyword)) {
      if (job.location.toLowerCase().includes(location)) {
        const jobListing = document.createElement('li');
        jobListing.innerHTML = `
          <h3><a href="${job.applyUrl}">${job.title} at ${job.company}</a></h3>
          <p>${job.location}</p>
          <p>${job.description}</p>
        `;
        featuredJobsList.appendChild(jobListing);
      }
    }
  }
});