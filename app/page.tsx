

export default function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
      <h1 className=" text-5xl font-bold mb-20">ChatGPT</h1>

      <div>
        <div>
          <div>
            {/* Sun icon */}
            <h2 className=" flex flex-col items-center justify-center mb-5">Examples</h2>
          </div>
          <div className=" space-y-2">
            <p className=" infoText">Explain Something to me</p>
            <p className=" infoText">The Difference between a Cat and a Dog</p>
            <p className=" infoText">What is the color of the sun</p>
          </div>
        </div>
      </div>
    </div>
  );
}
