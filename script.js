const jobs = [
    { title: "UX Research Intern", dept: "Design", location: "Remote", type: "Full-Time" },
    { title: "Mechanical Design Engineer", dept: "Robotics", location: "Bangalore", type: "Full-Time" },
    { title: "Junior Python Developer", dept: "Tech", location: "Trivandrum", type: "Internship" },
    { title: "AI/ML Analyst", dept: "Data Science", location: "Mumbai", type: "Contract" }
];

function displayJobs(jobsList) {
    const grid = document.getElementById('jobGrid');
    grid.innerHTML = jobsList.map(job => `
        <div class="job-card">
            <span class="tag">${job.dept}</span>
            <h3>${job.title}</h3>
            <p>📍 ${job.location} | 💼 ${job.type}</p>
            <a href="#" class="apply-btn">Apply Now</a>
        </div>
    `).join('');
}

function searchJobs() {
    const query = document.getElementById('jobSearch').value.toLowerCase();
    const filtered = jobs.filter(j => j.title.toLowerCase().includes(query) || j.dept.toLowerCase().includes(query));
    displayJobs(filtered);
}

// Initial Load
displayJobs(jobs);
