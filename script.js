const projects = [
    {
        "title": "Ticket system",
        "description": "Users can easily create, track, and efficiently manage support requests.",
        "image": "images/ticket.png",
        "tags": ["Html", "CSS", "JavaScript", "React"],
        "github": "error.html",
        "live": "https://tangerine-babka-53be2e.netlify.app/"
    },
    {
        "title": "Always Fresh Flowers",
        "description": "Dynamic floral shop with premium filtering and checkout experience.",
        "image": "images/flowers.png",
        "tags": ["Tailwind", "JS", "React"],
        "github": "#",
        "live": "#"
    },
    {
        "title": "Green Earth",
        "description": "Environmental awareness platform with interactive map features.",
        "image": "images/earth.png",
        "tags": ["React", "API", "Framer"],
        "github": "#",
        "live": "#"
    }
];

const container = document.getElementById('project-container');

function renderProjects() {
    if (!container) return;

    container.innerHTML = projects.map((p, index) => `
        <div class="project-card bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="overflow-hidden h-56">
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
            </div>
            <div class="p-8">
                <div class="flex gap-2 mb-4">
                    ${p.tags.map(t => `<span class="text-[10px] font-bold text-electriclime border border-electriclime/20 px-2 py-1 rounded-md bg-electriclime/5 uppercase">${t}</span>`).join('')}
                </div>
                <h3 class="text-2xl font-bold mb-3">${p.title}</h3>
                <p class="text-zinc-500 text-sm mb-6">${p.description}</p>
                <div class="flex items-center gap-6">
                    <a href="${p.live}" target="_blank" class="text-electriclime font-bold border-b border-electriclime pb-1 hover:text-white hover:border-white transition">View Live</a>
                    <a href="${p.github}" class="text-zinc-500 hover:text-white transition">Code</a>
                </div>
            </div>
        </div>
    `).join('');
}

renderProjects();

const cursorGlow = document.getElementById('cursorGlow');
const cursorBlur = document.getElementById('cursorBlur');

window.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    cursorGlow.style.transform = `translate(${x}px, ${y}px)`;
    cursorBlur.style.transform = `translate(${x}px, ${y}px)`;
});

