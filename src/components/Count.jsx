

export default function Count(props) {
 return (
  <div className="flex flex-row items-end">
    <h1 className="h-20 w-20 rounded-full text-white text-2xl bg-purple-800 flex items-center justify-center">{props.number}</h1>
  </div>
 )
}