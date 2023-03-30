

export default function Star(props) {
  let starIcon = props.isfilled? 'outline-star.svg' : 'outline-star-border.svg'
  return (
    <div className="" onClick={props.handleClick}>
      <img src={`assets/${starIcon}`} alt="star" className="w-8"/>
    </div>
  )
}