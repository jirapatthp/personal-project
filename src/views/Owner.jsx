import coldcereal from "../assets/colddcereal.png"
export default function Owner() {
  return (
    <div className="min-h-screen flex flex-col items-center  pt-12 gap-y-3 ">
      <h1 className="text-4xl font-bold text-center">coldd cereal</h1>
      <img
        src={coldcereal}
        alt="user image"
        className="w-64 rounded-2xl"
      />
      <p className="text-center">
        <span className="font-bold">hi <br /> ꒒ ০ ⌵ ୧ ♡</span>
        <br />I created Rolling Birthday as a small digital gift ┆ ° ♡ •  ✩ ◛ ° 
        <br /> a place where anyone can feel a bit of joy on their special day. <br />
Just spin, smile, and celebrate. You deserve it. 
      </p>
    </div>
  );
}
