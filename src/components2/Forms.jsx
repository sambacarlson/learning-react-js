import React from "react";

export default function Forms() {

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirm: "",
    newsletter: true
  })

  const handleChange = (event)=>{
    const {name, type, checked, value} = event.target /// good practice to destructure the event to just the things you need
    setFormData(prevFormData=>{
      console.log(name, value)
      return {
        ...prevFormData,
        [name]:type==='checkbox'? checked : value
      }
    })
  }

  function signUp(event){
    event.preventDefault()
    
    if(formData.password===formData.confirm) {
      console.log(`Successfully signed up`)
      formData.newsletter && console.log("Thanks for subscribing to our newsletter")
    }
    else console.log('passwords do not match!')
  }
  return (
    <div className="py-10 pl-4 bg-orange-400 w-full h-full">
      <form onSubmit={signUp} method='post' className="flex flex-col space-y-3 max-w-lg">
        <input type="text" name="email" placeholder="Email" required value={formData.email} onChange={handleChange}/>
        <input type="password" name="password" placeholder="password" required value={formData.password} onChange={handleChange}/>
        <input type="password" name="confirm" placeholder="confirm password" required value={formData.confirm} onChange={handleChange}/>
        <div>
          <input type="checkbox" name="newsletter" onChange={handleChange} checked={formData.newsletter} />
          <label htmlFor="newsletter">I want to join the newsletter</label>
        </div>
        <button className="bg-white p-2">Sign Up</button>
      </form>
    </div>
  )
}