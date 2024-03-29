import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import M from "materialize-css";
import fa from '../images/fa.jpg'
import matric from '../images/matric.jpg'
import mba from '../images/mba.jpg'
import mba_res from '../images/mba_res.jpg'
import bcom from '../images/bcom.jpg'

class Education extends Component {
constructor(){
    super()
    this.state = {
        
    }
}


componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems);
      });
}



    render() {        
        return (
            <div>
 <div className='container'>
    <h4 className="center-align blue-text grey lighten-4">EDUCATION</h4>
 </div>
                <div className='container'>
              
                    <ul className="collection">
                    <li href="#!" className="collection-item grey lighten-3"><b>Master of Business Administration (MBA)</b><br/>Allama Iqbal Open University<br/>Specialization : Banking and Finance <br/>Division : 1st <br/>Passing Year : 2009 <br/></li>
                    <li href="#!" className="collection-item grey lighten-2"><b>Beachlor of Commerce (B.com)</b><br/>University of the Punjab <br/>Division : 2nd <br/>Passing Year : 2006 <br/></li>
                    <li href="#!" className="collection-item grey lighten-3"><b>Intermediate</b><br/>B.I.S.E Faisalabad <br/>Division : 2nd <br/>Passing Year : 2004 <br/>Main Subject: Mathematics, Statistics <br/></li>
                    <li href="#!" className="collection-item grey lighten-2"><b>Matriculation with Science</b><br/>B.I.S.E Faisalabad <br/>Division : 2nd <br/>Passing Year : 2002 <br/></li>
                    </ul>
                   
                    <ul className="collection">
                    <h6 className="blue-text">Marks Detail, Click on;</h6>
                    <Link to='/Education/mba'><button>MBA</button></Link>     <Link to='/Education/bcom'><button>B.com</button></Link>     <Link to='/Education/fa'> <button>Inter</button></Link>    <Link to='/Education/matric'> <button>Matric</button></Link>
                   <Route path='/Education/mba' component={Mba} />
                   <Route path='/Education/bcom' component={Bcom} />
                   <Route path='/Education/fa' component={Fa} />
                   <Route path='/Education/matric' component={Matric} />
                   </ul>

            </div>


 
       
            

            


<div className="carousel carousel-slider">
<a className="carousel-item" href="#one!"><img src={fa} alt='pic here' width='400' height='800' /> </a>
 <a className="carousel-item" href="#two!"><img src={matric} alt='pic here' width='400' height='800'  /> </a>
<a className="carousel-item" href="#three!"><img src={mba} alt='pic here' width='400' height='800' /> </a>
<a className="carousel-item" href="#four!"><img src={mba_res} alt='pic here' width='400' height='800'  /> </a>
<a className="carousel-item" href="#five!"><img src={bcom} alt='pic here' width='400' height='800' /> </a>
</div>







            <div className='center'><Link to='/Experience'><button className="waves-effect waves-light btn-large">Experience</button></Link></div>
            </div>

        )


    }
}


class Mba extends Component {
    render(){
        return(
            <div>
                <p  style={{fontSize:'20px'}}className='grey lighten-3 red-text'>MBA-Banking and Finance</p>
               <table className='table grey lighten-2'>
                   <tr>
                       <td>Total Marks</td> <td>2000</td>
                   </tr>
                   <tr>
                       <td>Marks Obtained</td> <td>1206</td>
                   </tr>
                   <tr>
                       <td>Percentage</td> <td>60%</td>
                   </tr>
               </table>

               <p style={{fontSize:'20px'}} className='grey lighten-2 red-text'>Main Subjects-MBA</p>

               <table className='table grey lighten-2'>
               <tr>
                       <td>Financial Accounting</td>
                </tr>
                <tr>
                       <td>Cost  Accounting</td>
                </tr>
                <tr>
                       <td>Financial Management</td>
                </tr>
                <tr>
                       <td>Taxation</td>
                </tr>
                <tr>
                       <td>Banking Law In Pakistan</td>
                </tr>
                </table>
            </div>
        )
    }
}



class Bcom extends Component {
    render(){
        return(
            <div>
               <p style={{fontSize:'20px'}} className='grey lighten-2 red-text'>B.com </p>
               <table className='table grey lighten-3'>
                   <tr>
                       <td>Total Marks</td> <td>1500</td>
                   </tr>
                   <tr>
                       <td>Marks Obtained</td> <td>890</td>
                   </tr>
                   <tr>
                       <td>Percentage</td> <td>59%</td>
                   </tr>
               </table>

               <p style={{fontSize:'20px'}} className='grey lighten-2 red-text'>Main Subjects-B.com</p>

               <table className='table grey lighten-3'>
               <tr>
                       <td>Financial Accounting</td>
                </tr>
                <tr>
                       <td>Cost Accounting</td>
                </tr>
                <tr>
                       <td>Income Tax, Sales Tax</td>
                </tr>
                <tr>
                       <td>Business Math and Stat</td>
                </tr>
                <tr>
                       <td>Auditing</td>
                </tr>
                </table>
            </div>
        )
    }
}


class Fa extends Component {
    render(){
        return(
            <div>
                 <p style={{fontSize:'20px'}} className='grey lighten-2 red-text'>Intermediate </p>
               <table className='table grey lighten-3'>
                   <tr>
                       <td>Total Marks</td> <td>1100</td>
                   </tr>
                   <tr>
                       <td>Marks Obtained</td> <td>588</td>
                   </tr>
                   <tr>
                       <td>Percentage</td> <td>53%</td>
                   </tr>
               </table>

               <p style={{fontSize:'20px'}} className='grey lighten-2 red-text'>Main Subjects - Intermediate</p>

               <table className='table grey lighten-3'>
               <tr>
                       <td>Mathematics</td>
                </tr>
                <tr>
                       <td>Statistics</td>
                </tr>
                <tr>
                       <td>English</td>
                </tr>
                
                </table>
            </div>
        )
    }
}




class Matric extends Component {
    render(){
        return(
            <div>
               <p style={{fontSize:'20px'}} className='grey lighten-2 red-text'>Matriculation </p>
               <table className='table grey lighten-3'>
                   <tr>
                       <td>Total Marks</td> <td>850</td>
                   </tr>
                   <tr>
                       <td>Marks Obtained</td> <td>423</td>
                   </tr>
                   <tr>
                       <td>Percentage</td> <td>50%</td>
                   </tr>
               </table>

               <p style={{fontSize:'20px'}} className='grey lighten-2 red-text'>Main Subjects - Matric</p>

               <table className='table grey lighten-3'>
               <tr>
                       <td>Physics</td>
                </tr>
                <tr>
                       <td>Chemistry</td>
                </tr>
                <tr>
                       <td>Mathematics</td>
                </tr>
                <tr>
                       <td>Electricity Basics</td>
                </tr>
                
                </table>
            </div>
        )
    }
}







export default Education;







