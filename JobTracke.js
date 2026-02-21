let jobs = [
    { id: 1, company: "Mobile First Corp", 
        role: "React Native Developer", 
        loc: "Remote", 
        type: "Full-time", 
        salary: "$130k - $175k", 
        description: "Build cross-platform mobile applications using React Native and Redux. Focus on high-performance UI and fluid animations.", 
        status: "all" },
    { id: 2, company: "WebFlow Agency", 
        role: "Web Designer & Developer", 
        loc: "Los Angeles, CA", 
        type: "Part-time", 
        salary: "$80k - $120k", 
        description: "Create stunning web experiences for high-profile clients. Must have excellent UX/UI experience with Webflow and JavaScript.", 
        status: "all" },
    { id: 3, company: "DataViz Solutions", 
        role: "Data Visualization Specialist", 
        loc: "Austin, TX", 
        type: "Full-time", 
        salary: "$90k - $120k", 
        description: "Transform complex datasets into interactive visual stories. Required skills: D3.js, React, and strong analytical thinking.", 
        status: "all" },
    { id: 4, company: "GreenField Inc", 
        role: "Backend Developer", 
        loc: "Remote", 
        type: "Full-time", 
        salary: "$110k - $140k", 
        description: "Design and maintain scalable backend systems using Node.js and AWS. Focus on performance and database optimization.", 
        status: "all" },
    { id: 5, company: "Innovative Labs", 
        role: "UI/UX Designer", 
        loc: "Portland, OR", 
        type: "Full-time", 
        salary: "$85k - $110k", 
        description: "Create beautiful and functional user interfaces for our mobile products. Strong focus on user research and prototyping.", 
        status: "all" },
    { id: 6, company: "MegaCorp Solutions", 
        role: "Java Software Developer", 
        loc: "New York, NY", 
        type: "Part-time", 
        salary: "$100k - $130k", 
        description: "Build enterprise-grade software with Java Spring Boot. Collaborate with cross-functional teams in an agile environment.", 
        status: "all" },
    { id: 7, company: "StartupXYZ", 
        role: "Full Stack Engineer", 
        loc: "Remote", 
        type: "Full-time", 
        salary: "$120k - $150k", 
        description: "Join our growing startup and help us build the next big platform. Experience with React, Node.js, and MongoDB required.", 
        status: "all" },
    { id: 8, company: "TechCorp Industries", 
        role: "Senior Frontend Developer", 
        loc: "San Francisco, CA", 
        type: "Full-time", 
        salary: "$140k - $170k", 
        description: "Lead our frontend team in building modern web applications using React and Tailwind CSS. Focus on performance and accessibility.", 
        status: "all" }
];
const container = document.getElementById('job-container');
function AllJobs(filter = 'all') {
    const filtered = filter === 'all' ? jobs : jobs.filter(j => j.status === filter);
    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm w-full">
                <img src="Image/jobs.png" class="w-24 mb-4 opacity-20" alt="No jobs">
                <h3 class="text-xl font-bold text-gray-700">No jobs available</h3>
                <p class="text-gray-400">Check back later for new opportunities</p>
            </div>`;
        updateDashboard(); 
        return;
    }

    filtered.forEach(job => {
        const isInterview = job.status === 'interview';
        const isRejected = job.status === 'rejected';
        
        let borderClass = "border-gray-100";
        if (isInterview) borderClass = "border-green-500 ring-1 ring-green-500";
        if (isRejected) borderClass = "border-red-500 ring-1 ring-red-500";
        ;

        container.appendChild(card);
    });
    updateDashboard();
}

