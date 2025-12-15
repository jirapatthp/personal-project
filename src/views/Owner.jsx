import coldcereal from "../assets/colddcereal.png"




export default function Owner() {
  return (
    <div className="min-h-screen flex flex-col items-center  pt-12 gap-y-3 bg-[url('https://i.pinimg.com/1200x/a8/ad/0a/a8ad0a9fd69b2e11324c16bd93bb6406.jpg')]">

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
