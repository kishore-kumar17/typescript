import React from 'react'

const Todos:React.FC<{items:string[]}>  = (props) => {



  return (
    <div>

    {props.items.map((data)=>(
        <h2 key={data}>{data}</h2>
    ))}
    </div>
  )
}

export default Todos;



