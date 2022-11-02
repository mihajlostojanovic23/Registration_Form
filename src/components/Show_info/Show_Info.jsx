import React from 'react'

function Show_Info(props) {
    const {values, setValues} = props
  return (
    <div className='display'>
        {values.map((value,index)=> {
            return (<div key={index}>
                <h2 className='fullName'>Full Name:<p>{value.fullName}</p></h2>
            <h2 className='email'>E-mail:<p>{value.email}</p></h2>
            <h2 className='gender'>Gender:<p>{value.gender}</p></h2>
            <h2 className='phone'>Phone:<p>{value.phone}</p></h2>
            <h2 className='skills'>Skills:<p>{value.skills.map((skill,index)=> <p key={index}>{skill}</p>)}</p></h2>
            <div className="exit" onClick={()=> setValues([])}>X</div>
            </div>)
        })}
    </div>
  )
}

export default Show_Info