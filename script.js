1. Expanded Job Database (Added more roles to show variety)
const jobs = [
    { title: "UX Research Intern", dept: "Design", location: "Remote", type: "Full-Time" },
    { title: "Mechanical Design Engineer", dept: "Robotics", location: "Bangalore", type: "Full-Time" },
    { title: "Junior Python Developer", dept: "Tech", location: "Trivandrum", type: "Internship" },
    { title: "AI/ML Analyst", dept: "Data Science", location: "Mumbai", type: "Contract" },
    { title: "Automotive Engineer", dept: "Mechanical", location: "Chennai", type: "Full-Time" },
    { title: "Product Designer", dept: "Design", location: "Remote", type: "Full-Time" },
    { title: "Quality Control Lead", dept: "Manufacturing", location: "Pune", type: "Full-Time" },
    { title: "Frontend Developer", dept: "Tech", location: "Bangalore", type: "Full-Time" },
    { title: "Robotics Researcher", dept: "Robotics", location: "Hyderabad", type: "Internship" }
];

const jobGrid = document.getElementById('jobGrid');
const searchInput = document.getElementById('jobSearch');
const searchBtn = document.getElementById('searchBtn');

// 2. Fixed Display Function
function displayJobs(jobsToRender) {
    if (jobsToRender.length === 0) {
        jobGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #94969f;">
                <h3>No jobs found matching your search.</h3>
                <p>Try searching for "Mechanical" or "Design".</p>
            </div>`;
        return;
    }

    jobGrid.innerHTML = jobsToRender.map(job => `
        <div class="job-card">
            <span class="dept-tag">${job.dept.toUpperCase()}</span>
            <h3>${job.title}</h3>
            <div class="job-info">📍 ${job.location} | 💼 ${job.type}</div>
            <button onclick="applyNow('${job.title}')" class="apply-btn" style="width:100%; cursor:pointer; background:none;">Apply Now</button>
        </div>
    `).join('');
}

// 3. New 'Apply' Functionality
function applyNow(jobTitle) {
    // Instead of doing nothing, this now gives the user feedback
    alert("Thank you for your interest in the " + jobTitle + " position! Redirecting to the application form...");
    
    // Optional: Redirect to your LinkedIn or a Google Form
    // window.location.href = "https://www.linkedin.com/in/your-profile"; 
}
// ... (your existing jobs array and displayJobs function) ...

// PASTE IT HERE
function applyNow(jobTitle) {
    // This will open your LinkedIn in a new tab
    window.open("https://www.linkedin.com/in/adithravi", "_blank");
}

// ... (your search logic and event listeners) ...
// 4. Search Logic
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = jobs.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.dept.toLowerCase().includes(query)
    );
    displayJobs(filtered);
}

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// Initial Load
displayJobs(jobs);
