function ProjectCard({ title, tag }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
        {tag}
      </span>
    </div>
  );
}
export default function Projects() {
  const projects = [    
    { id: 1, title: "Quote Generator", tag: "JavaScript" },
    { id: 2, title: "BMI Calculator", tag: "JavaScript" },
  ];
  return (
    <section className="py-10 px-4 max-w-4xl ">
      <h2 className="text-4xl font-bold text-center mb-8">ผลงานของฉัน</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tag={project.tag}
          />
        ))}
      </div>
    </section>
  );
}