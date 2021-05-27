import React from 'react';
import './styles/cards.scss';
import {useState} from 'react'
import moment from 'moment';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles({
    root: {
      '@media (min-width:1440px)':{
        position:'relative', width: 1131,height: 168,left: 2,top: 64, marginBottom: 32, },
      '@media (min-width:375px) and (max-width:767px)':{
       width: 343, position:'relative', height: 168,left: 0, top: 32,borderRadius: 3,  marginBottom: 24, justifyContent:'center',
       alignItems:'center' },
     '@media (min-width:768px) and (max-width:1439px)':{
       width: 720,height: 171, position:'relative', left: 24,  top: 59 ,  marginBottom: 16}  },
            });

const Cards=({user, first,sec,thr,firstd,secd,thrd})=> {
  const [classs, setClasss] = useState(true);
  const classes = useStyles();
    var timeStamp = moment(user.payment_date).subtract(1, 'day').format("DD-MMM-YYYY").toUpperCase();
    var timeStamps = moment(user.coverage_start_date).subtract(1, 'day').format("DD-MMM-YYYY").toUpperCase();
    var timeStamp2 = moment(user.coverage_end_date).subtract(1, 'day').format("DD-MMM-YYYY").toUpperCase();
  return (
    <Card className= {classes.root} id={classs?"":"boxshadow"} onClick={()=>{setClasss(!classs) }}>
       <CardContent>
         
                 <FontAwesomeIcon className={classs?"iconcircle":"iconfill"} icon={farCircle} style={{width:48, height:48}} />
                 <FontAwesomeIcon className={classs?"iconright":"icondown"} icon={faChevronRight} style={{width:21, height:12}} /> 
                       <div className="header">{user.title===first&&<div className="first">{user.title}</div>}{user.title===sec && <div className="second">{user.title}</div>} {user.title===thr && <div className="thr">{user.title}</div>}
                       {/* <div className="ud"> */}
                         {user.description===firstd &&<div className="firstd"> XXXX-XXXX-INS | {user.description}</div>}{user.description===secd &&<div className="secd"> XXXX-XXXX-INS | {user.description}</div>} {user.description===thrd &&<div className="thrd"> XXXX-XXXX-INS | {user.description}</div>}
                       {/* </div> */}
                         <img className="img" src={user.partner.logo} alt="Logo"/></div> 
                     
                          <hr id={user.description===thrd?"hrt":"hr"}></hr>
                          <div className="group1"><div className="g11">{timeStamp}</div><div className="g12">Payment Date</div>  </div>
                          <div className="line"></div>
                         
                        
                            {user.coverage_end_date&&(<> <div className="g2" >{timeStamps} to {timeStamp2}</div><div className="g21"> coverage dates </div></>) }
                            {!user.coverage_end_date&&(<><div className="g22">{timeStamps}</div><div className="g23"> Date Shipped</div></>)} 
                            <div className={user.status==="active"?'actives':'expired'}>{user.status}</div>
                            
                            <div className={user.status==="active"?'eg':'er'}></div>
                          
                      
                            <div className="line2"></div>
                                        <div id="group3"> 
                                        <div className="g31">{user.premium_formatted}</div>
                                        <div className="g32"> price/premium</div>
                                        </div>
                                        <div className={user.renewal? "line3":""}></div>
                        <div className="group4">{user.renewal && (<> <div className="annual">{user.renewal}</div> <div className="renewal"> Renewal</div></>)}
                               
                                </div> 
         </CardContent>
      </Card> );
 }
export default Cards;
