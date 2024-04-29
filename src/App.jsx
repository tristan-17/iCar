import carImg from "./images/car.webp"

export default function App() {
  return <div className="h-screen w-screen flex items-center justify-center gap-5 flex-col">
    <h1 className="text-red-500 font-bold text-xl">iCar</h1>
    <img className="h-[300px] rounded-lg" src={carImg} alt="Car image" />
  </div>
}