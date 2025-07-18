import React, { useState, useEffect, useContext, useMemo } from "react"
import SearchBar from "../components/SearchBar"
 

const Favorites = (props) => {
    const [switchView, setSwitchView] = useState(false)
    const [search, setSearch] = useState('')
    const [codeValue, setCodeValue] = useState(1)
    const [submenu, setSubmenu] = useState(0)
   
    const copyComponent = (value) => {
        navigator.clipboard.writeText(value).then(() => {
            alert("Copied to clipboard!")

            setTimeout(() => {
                if(codeValue == 1) setCodeValue(2)
            }, 700);
            
        }).catch(err => {
        console.error("Failed to copy: ", err);
        });
    };
  
    return(
        <div 
            className={`d-flex custom-card animate__animated animate__fadeIn`}
        >
           
            <div className={switchView? 'h-100' : ''} style={{width:'100%',alignItems:'center'}}>

                <h2 style={{color:'#1565c0'}}>My Favorites</h2>
                <hr />
                <div className={`animate__animated ${switchView? 'animate__fadeInUp' : 'animate__fadeIn'}`} style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:'3%'}}>
                    <div className="row">
                        <div className="col-3" onClick={() => alert('Leads to a page similar to the one after search with this component')}>
                            <img 
                                className="animate__animated animate__fadeIn favCard"
                                src={require('../demo.png')} 
                            />

                            <div class="card-inside w-100 mb-3" style={{borderBottomLeftRadius:12,borderBottomRightRadius:12}}>
                                <div class="row">
                                    <div class="col-12">
                                        <p className="mb-0">Create a login button with a purple background</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3" onClick={() => alert('Leads to a page similar to the one after search with this component')}>
                            <img 
                                className="animate__animated animate__fadeIn favCard"
                                src={require('../demo.png')} 
                            />

                            <div class="card-inside w-100 mb-3" style={{borderBottomLeftRadius:12,borderBottomRightRadius:12}}>
                                <div class="row">
                                    <div class="col-12">
                                        <p className="mb-0">Can you help me build a React component for a login form? I want it to have email and password inputs, and a submit button that turns blue when hovered</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3" onClick={() => alert('Leads to a page similar to the one after search with this component')}>
                            <img 
                                className="animate__animated animate__fadeIn favCard"
                                src={require('../demo.png')} 
                            />

                            <div class="card-inside w-100 mb-3" style={{borderBottomLeftRadius:12,borderBottomRightRadius:12}}>
                                <div class="row">
                                    <div class="col-12">
                                        <p className="mb-0">I need a responsive card component with an image at the top, a title, some text, and a button at the bottom. Can you write the JSX and CSS for it?</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <img 
                                className="animate__animated animate__fadeIn favCard"
                                src={require('../demo.png')} 
                            />

                            <div class="card-inside w-100 mb-3" style={{borderBottomLeftRadius:12,borderBottomRightRadius:12}}>
                                <div class="row">
                                    <div class="col-12">
                                        <p className="mb-0">Can you help me build a React component for a login form? I want it to have email and password inputs, and a submit button that turns blue when hovered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
           
        </div>
    )
}

export default Favorites