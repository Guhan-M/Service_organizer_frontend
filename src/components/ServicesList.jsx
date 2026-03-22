import React from 'react'

function ServicesList() {
       const serviceList =[
        {
            id:"001",
            name:"Electrician"
        },
        {
            id:"002",
            name:"Plumber"
        },
        {
            id:"003",
            name:"Carpenter"
        },
        {
            id:"004",
            name:"AC & Appliance"
        },
        {
            id:"005",
            name:"Water Purifier"
        },
        {
            id:"006",
            name:"Cleaning & Pest Control"
        },
        {
            id:"007",
            name:"Men's Salon"
        },
        {
            id:"008",
            name:"Women's Salon"
        }
    ]
  return <>
  <div className='container'>
    <h2>sHome sserives at yssoaur adooarstsepssssssa
        hello
    </h2>
    { 
        serviceList.map((e,i)=>{
            return <div key={i} style={{display:"flex",flexDirection:"row-reverse"}}>
                <div>{e.name}</div>
            </div>
        })
    }
  </div>
  
  </>
}

export default ServicesList