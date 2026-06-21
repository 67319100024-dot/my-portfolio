function Section({ title, children }) {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-bold mb-">{title}</h2>
      {children}
    </section>
  );
}
export default function About() {
  return (
    <div className="items-center justify-center">
      <Section title="เกี่ยวกับฉัน">
        <p className="text-lg">ผมชื่อ นายอนุภัทร นันทรุจิ</p>
        <p className="text-lg">ผมกำลังศึกษาที่ วิทยาลัยพณิชยการธนบุรี</p>
        <p className="text-lg">ในระดับชั้น ป.ตรี</p>
      </Section>
    </div>
  );
}