
function Skillss() {
  const skills = ["Graphic Design","Developer","Salesman","Gamer"];
  return (
    <section className="text-center">
      <h2 className="text-4xl font-boldmb-2 py-5" >ทักษะ</h2>
      <div className="text-2xl flex justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-gradient-to-br from-red-400 to-purple-700 px-4 py-2 rounded-full">{skill}</span>
        ))}
      </div>
    </section>
  );
}
export default function Skills() {
  return (
    <Skillss />
  );
}