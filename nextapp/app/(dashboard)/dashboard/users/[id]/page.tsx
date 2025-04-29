import React from 'react'

const page = ({params} : {params: {id: string}}) => {
    const {id} = params;

    return (
      <div>User Profile: {id}</div>
    ) 
}

export default page

//Buradaki [id], bir dynamic route'tur.
//Next.js diyor ki: "URL'deki /dashboard/users/1 gibi bir istek 
//geldiğinde, id değerini alıp params objesine koyarım."