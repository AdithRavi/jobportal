const jobs = [
    { title: "Senior Mechanical Engineer", dept: "Systems", loc: "Berlin, DE", type: "Full-Time" },
    { title: "UX Architecture Lead", dept: "Product", loc: "Remote", type: "Full-Time" },
    { title: "Robotics Motion Analyst", dept: "R&D", loc: "Bangalore, IN", type: "Contract" },
    { title: "AI Research Scientist", dept: "Intelligence", loc: "San Francisco, US", type: "Full-Time" },
    { title: "Mechatronics Intern", dept: "Hardware", loc: "Trivandrum, IN", type: "Internship" }
];

const grid = document.getElementById('jobGrid');

function render(data) {
    grid.innerHTML = data.length ? data.map(j => `
        <div class="job-card">
            <span class="tag">${j.dept}</span>
            <h3>${j.title}</h3>
            <p style="color: #64748b; font-size: 0.9rem;">${j.loc} • ${j.type}</p>
            <div class="apply-link" onclick="openModal('${j.title}')">
                Apply for Position →
            </div>
        </div>
    `).join('') : `<p>No openings match your search.</p>`;
}

function openModal(title) {
    document.getElementById('modalJobTitle').innerText = title;
    document.getElementById('applyModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('applyModal').style.display = 'none';
}

document.getElementById('applicationForm').onsubmit = (e) => {
    e.preventDefault();
    closeModal();
    const t = document.getElementById('toast');
    t.style.display = 'block';
    setTimeout(() => t.style.display = 'none', 4000);
};

document.getElementById('searchBtn').onclick = () => {
    const q = document.getElementById('jobSearch').value.toLowerCase();
    render(jobs.filter(j => j.title.toLowerCase().includes(q) || j.dept.toLowerCase().includes(q)));
};

render(jobs);
