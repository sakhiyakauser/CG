import 'react-app-polyfill/ie11';
import React from 'react';
import './styles/cards.scss';
import Cards from './Cards'
import {useState, useEffect} from 'react'
export default function ImgMediaCard() {
  const [insurancePolicy, setInsurancePolicy]= useState([])
  const [first, setFirst]= useState([])
  const [sec, setSec]= useState([])
  const [thr, setThr]= useState([])
  const [firstd, setFirstd]= useState([])
  const [secd, setSecd]= useState([])
  const [thrd, setThrd]= useState([])
  useEffect(() => {
    const changeUsers = async () => {
    const url = `https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking`;
     await fetch(url)
       .then((response) => response.json())
       .then((data) => {
        setInsurancePolicy(data.policies);
        setFirst(data.policies[0].title)
        setSec(data.policies[1].title)
        setThr(data.policies[2].title)
        setFirstd(data.policies[0].description)
        setSecd(data.policies[1].description)
        setThrd(data.policies[2].description)
       });
};
changeUsers();
},[])
return (
  <>
<div className="outrectangle">
<div className="wrapper">
<div className="yp">YOUR POLICIES</div>
{insurancePolicy.map(user=>(
   <Cards user={user} first={first} sec={sec} thr={thr} firstd={firstd}  secd={secd} thrd={thrd}/>
))}
</div>
 </div>
    </>
  );
}


