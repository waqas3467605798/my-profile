import React, {Component} from 'react'
import '../App.css'



class Contact extends Component {
constructor(){
    super()
    this.state = {
        
    }
}



    render() {        
        return (
            <div>
            <div className='container grey lighten-4'>
                <h4 className="center-align blue-text">Contact Details</h4>
            </div>

                     <div className='container'>
                        <div className="card blue-grey lighten-4">
                        <div className="card-content black-text">
                        <span className="card-title"><b>Mobile Numbers</b>  </span>
                        <p> +923467605798 <br/>+923167558180</p>
                        </div>
                    </div>
                    </div>


                    <div className='container'>
                        <div className="card blue-grey lighten-4">
                        <div className="card-content black-text">
                        <span className="card-title"><b>E-Mails</b>  </span>
                        <p> waqas.mba86@gmail.com <br/>waqas_mba86@yahoo.com</p>
                        </div>
                    </div>
                    </div>


                    <div className='container'>
                        <div className="card blue-grey lighten-4">
                        <div className="card-content black-text">
                        <span className="card-title"><b>Office</b>  </span>
                        <p> Ph: 041-8757081-90 Ext. 108 <br/>Address: Head Office-Niagara Mills (Pvt) ltd., Kashmir Road, Nishatabad, Faisalabad, Pakistan.</p>
                        </div>
                    </div>
                    </div>



                    <div className='container center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.220221452544!2d73.10815793304452!3d31.433267752374253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226845b2c11d17%3A0x544b17e96c8891eb!2sMansoorabad%2C%20Faisalabad%2C%20Punjab!5e0!3m2!1sen!2s!4v1586832397405!5m2!1sen!2s" width="100%" height="250" frameborder="0">

                    </iframe>

                    
                    </div>


            </div>

        )


    }
}

export default Contact;