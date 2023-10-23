import { useEffect, useState } from "react"

export default function Content(){
  const search = "all"

  const [url, setUrl] = useState(`https://restcountries.com/v3.1/${search}`);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
  })

  return(
    <div>
      
    </div>
  )
}