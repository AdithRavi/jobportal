const jobs = [
    { title: "UX Research Intern", dept: "Design", location: "Remote", type: "Full-Time" },
    { title: "Mechanical Design Engineer", dept: "Robotics", location: "Bangalore", type: "Full-Time" },
    { title: "Junior Python Developer", dept: "Tech", location: "Trivandrum", type: "Internship" },
    { title: "AI/ML Analyst", dept: "Data Science", location: "Mumbai", type: "Contract" }
];

const jobGrid = document.getElementById('jobGrid');
const searchInput = document.getElementById('jobSearch');
const searchBtn = document.getElementById('searchBtn');

function displayJobs(filteredJobs) {
    if (filteredJobs.length === 0) {
        jobGrid.innerHTML = `<p style="text-align: center; width: 100%;">No jobs found.</p>`;
        return;
    }
    jobGrid.innerHTML = filteredJobs.map(job => `
        <div class="job-card">
            <span class="dept-tag">${job.dept.toUpperCase()}</span>
            <h3>${job.title}</h3>
            <div class="job-info">📍 ${job.location} | 💼 ${job.type}</div>
            <a href="#" class="apply-btn">Apply Now</a>
        </div>
    `).join('');
}

function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = jobs.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.dept.toLowerCase().includes(query)
    );
    displayJobs(filtered);
}

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });

// Initial render
displayJobs(jobs);
