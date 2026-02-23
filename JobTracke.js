const jobsData = [
    { id: 1, 
        company: "Mobile First Corp", 
        position: "React Native Developer", 
        loc: "Remote", 
        type: "Full-time", 
        salary: "$130k-$175k", 
        desc: "Build cross-platform mobile apps." 
    },
    { id: 2, 
        company: "WebFlow Agency", 
        position: "Web Designer", 
        loc: "LA", 
        type: "Part-time", 
        salary: "$80k-$120k", 
        desc: "High-profile client websites." 
    },
    { id: 3, company: "DataViz Solutions", 
        position: "Data Specialist", 
        loc: "Austin", 
        type: "Full-time", 
        salary: "$90k-$120k", 
        desc: "Visual data storytelling." 
    },
    { id: 4, 
        company: "GreenField Inc", 
        position: "Backend Dev", 
        loc: "Remote", 
        type: "Full-time", 
        salary: "$110k-$140k", 
        desc: "Scalable Node.js systems." 
    },
    { id: 5, 
        company: "Innovative Labs", 
        position: "UI Designer", 
        loc: "Portland", 
        type: "Full-time", 
        salary: "$85k-$110k", 
        desc: "Mobile product interfaces." 
    },
    { id: 6, 
        company: "MegaCorp", 
        position: "Java Developer", 
        loc: "NY", 
        type: "Part-time", 
        salary: "$100k-$130k", 
        desc: "Enterprise Java software."
    },
    { id: 7, 
        company: "StartupXYZ", 
        position: "Full Stack", 
        loc: "Remote", 
        type: "Full-time", 
        salary: "$120k-$150k", 
        desc: "Building next-gen platforms." 
    },
    { id: 8, 
        company: "TechCorp", 
        position: "Frontend Lead", 
        loc: "SF", 
        type: "Full-time", 
        salary: "$140k-$170k", 
        desc: "Modern React apps." 
    }
];
const container = document.getElementById('job-container');

function AllJobs() {
    jobsData.forEach(job => {
        const card = document.createElement('div');
        card.id = `job-${job.id}`;
        card.className = "job-card bg-white p-6 rounded-lg border border-gray-100 shadow-sm relative flex flex-col gap-2";
        card.setAttribute('data-status', 'all');

        card.innerHTML = `
            <button onclick="deleteCard(${job.id})" class="absolute top-4 right-4 text-gray-300 hover:text-red-500">✕</button>
            <h4 class="font-bold text-lg">${job.company}</h4>
            <p class="text-sm font-semibold text-gray-600">${job.position}</p>
            <p class="text-xs text-gray-400 uppercase font-bold">${job.loc} • ${job.type} • ${job.salary}</p>
            <div class="badge-area my-2 h-6">
                <span class="badge bg-gray-100 text-gray-400 border-none text-[10px] font-bold">NOT APPLIED</span>
            </div>
            <p class="text-sm text-gray-500 mb-4">${job.desc}</p>
            <div class="flex gap-2">
                <button onclick="setStatus(${job.id}, 'interview')" class="btn-int btn btn-sm btn-outline btn-success flex-1">Interview</button>
                <button onclick="setStatus(${job.id}, 'rejected')" class="btn-rej btn btn-sm btn-outline btn-error flex-1">Rejected</button>
            </div>`;
        container.appendChild(card);
    });
    updateUI();
}

window.setStatus = function(id, status) {
    const card = document.getElementById(`job-${id}`);
    const currentStatus = card.getAttribute('data-status');
    const badgeArea = card.querySelector('.badge-area');
    
// toggle
let newStatus;
if (currentStatus === status) {
    newStatus = 'all';
} else {
    newStatus = status;
}
card.setAttribute('data-status', newStatus);
    card.classList.remove();
    if (newStatus === 'interview') {
        card.classList.add();
        badgeArea.innerHTML = `<span class="badge bg-green-500 text-white border-none text-[10px] font-bold">INTERVIEW</span>`;
    } else if (newStatus === 'rejected') {
        card.classList.add();
        badgeArea.innerHTML = `<span class="badge bg-red-500 text-white border-none text-[10px] font-bold">REJECTED</span>`;
    } else {
        badgeArea.innerHTML = `<span class="badge bg-gray-100 text-gray-400 border-none text-[10px] font-bold">NOT APPLIED</span>`;
    }
    const activeTab = document.querySelector('.tab-active').innerText.toLowerCase();
    filterJobs(activeTab, document.querySelector('.tab-active'));
};
window.filterJobs = function(type, element) {

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('tab-active'));
    element.classList.add('tab-active');

    const cards = document.querySelectorAll('.job-card');
    cards.forEach(card => {
        const status = card.getAttribute('data-status');

        if (type === 'all' || status === type) {
            card.classList.remove('card-hidden');
        } else {
            card.classList.add('card-hidden');
        }
    });

    updateUI();
};

window.deleteCard = function(id) {
    const card = document.getElementById(`job-${id}`);
    card.remove();
    updateUI();
};

function updateUI() {
    const allCards = Array.from(document.querySelectorAll('.job-card'));
    const visibleCards = allCards.filter(c => !c.classList.contains('card-hidden'));
    
    document.getElementById('total-count').innerText = allCards.length;
    document.getElementById('interview-count').innerText = allCards.filter(c => c.getAttribute('data-status') === 'interview').length;
    document.getElementById('rejected-count').innerText = allCards.filter(c => c.getAttribute('data-status') === 'rejected').length;

    document.getElementById('job-count-label').innerText = `${visibleCards.length} jobs`;

    const emptyState = document.getElementById('empty-state');
    if (visibleCards.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}
AllJobs();