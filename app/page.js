export default function Home() {
  const Avtar = "👨🏿";
  const name = "Anuphat Nanataruji";
  
  return (
     <main className="min-h-screen flex flex-col items-center justify-center px-100 bg-gradient-to-br from-cyan-600 to-purple-600 ">
      
      <div className="  px-0.5 py-7  bg-gradient-to-br from-red-600 to-purple-300 rounded-full text-9xl mb-8" >{Avtar}</div>
      <p className="font-mono text-2xl text-white/80 mb-2" >PROFILE
      </p>
      <h1 className="font-mono text-7xl font-bold text-white mb-4">
        {name}
      </h1>
      <p className="font-mono text-2xl text-white/80 mb-8" >Graphics Man
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 ">
         View Project
        </button>
        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full  bg-purple-50 ">
         Contact
        </button>
      </div>
      
    </main>
  );
}