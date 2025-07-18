import React, { useState, useEffect, useContext, useMemo } from "react"
import SearchBar from "../components/SearchBar"
 

const Search = (props) => {
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
            style={{justifyContent:'center',alignItems:switchView? 'flex-start' : 'center'}}
        >
           
            <div className={switchView? 'h-100' : ''} style={{width:'100%',alignItems:'center'}}>
            
                <div className={`animate__animated ${switchView? 'animate__fadeInUp' : 'animate__fadeIn'}`} style={{width:'100%',justifyContent:'center',alignItems:'center',marginBottom:'3%'}}>
                    <h1 className={`${switchView && 'd-none'} text-center`} style={{fontSize:'1.5rem',fontWeight:'bold', marginBottom:'1.5%'}}>Hi, Khadim</h1>

                    <div className="d-flex justify-content-center align-items-center w-50" style={{margin:'auto',position:'relative'}}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Describe what you want to build..."
                            style={{width:'100%',height:'60px',borderRadius:'100px',paddingLeft:'20px',margin:'auto',textAlign:'center',borderWidth:'2px'}}
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                            value={search}
                        />

                        {switchView && 
                            <span 
                                className={`regButton ${switchView&&'cancel'} material-symbols-outlined text-center`}  
                                onClick={() => {
                                    
                                    alert('Regenerate components in a different flavor')
                                }}
                            >
                                replay
                            </span>
                        }

                        <span 
                            className={`sendButton ${switchView&&'cancel'} material-symbols-outlined text-center`}  
                            onClick={() => {
                                
                                
                                if(switchView){
                                    setSearch('')
                                    setCodeValue(1)
                                } 

                                
                                setSwitchView(!switchView)
                            }}
                        >
                           {switchView?  'close' : 'send'}
                        </span>
                    </div>
                </div>
            
                {switchView &&
                    <>
                        {submenu == 0 &&
                            <>
                                <div className="row" style={{height:'75%'}}>

                                    <div className="col-xl-6 col-12 h-100">
                                        <div className="container-custom">
                                            <img 
                                                className="animate__animated animate__fadeIn"
                                                style={{
                                                    width:'100%',
                                                }}
                                                src={require('../demo.png')} 
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-12 h-100">
                                        <div className={`container-custom animate__animated ${codeValue == 2 && 'animate__headShake'}`} style={{backgroundColor:'#212121',padding:15}}>
                                            <div className="d-flex" style={{alignItems:'center',borderBottom:'1px solid whitesmoke',paddingBottom:'1pc'}}>
                                                <select className="form-select" style={{width:'25%'}} value={codeValue} onChange={(e) => setCodeValue(e.target.value)}>
                                                    <option value="1">HTML</option>
                                                    <option value="2">TypeScript</option> 
                                                </select> 

                                                <span 
                                                    id="favorite" 
                                                    className="material-symbols-outlined" 
                                                    onClick={() => {}}
                                                
                                                    style={{fontSize:'1.5rem',marginLeft:'10px'}}
                                                >
                                                    favorite
                                                </span>

                                                <span 
                                                    id="copy" 
                                                    className="material-symbols-outlined" data-bs-container-custom="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover" 
                                                    onClick={() => {
                                                        copyComponent(
                                                            `
                                                                import { ScreenReader, Table, Tbody, Td, Th, Thead, Tr } from '@visa/nova-react';
                                                                import { CSSProperties } from 'react';

                                                                    export const LargePaddingBandedTable = () => {
                                                                    return (
                                                                        <Table
                                                                        alternate
                                                                        style={
                                                                            {
                                                                            '--v-table-data-padding-block-default': 'var(--v-table-data-padding-block-large)',
                                                                            '--v-table-data-block-default': 'var(--v-table-data-block-large)',
                                                                            } as CSSProperties
                                                                        }
                                                                        >
                                                                        <ScreenReader tag="caption">Table with large padding and banded rows.</ScreenReader>
                                                                        <Thead>
                                                                            <Tr>
                                                                            <Th scope="col">Column A</Th>
                                                                            <Th scope="col">Column B</Th>
                                                                            <Th scope="col">Column C</Th>
                                                                            <Th scope="col">Column D</Th>
                                                                            </Tr>
                                                                        </Thead>
                                                                        <Tbody>
                                                                            <Tr>
                                                                            <Td>A1</Td>
                                                                            <Td>B1</Td>
                                                                            <Td>C1</Td>
                                                                            <Td>D1</Td>
                                                                            </Tr>
                                                                            <Tr>
                                                                            <Td>A2</Td>
                                                                            <Td>B2</Td>
                                                                            <Td>C2</Td>
                                                                            <Td>D2</Td>
                                                                            </Tr>
                                                                            <Tr>
                                                                            <Td>A3</Td>
                                                                            <Td>B3</Td>
                                                                            <Td>C3</Td>
                                                                            <Td>D3</Td>
                                                                            </Tr>
                                                                        </Tbody>
                                                                        </Table>
                                                                    );
                                                                };
                                                            `
                                                        )

                                                    
                                                        
                                                    }}
                                                    style={{fontSize:'1.5rem',marginLeft:'10px'}}
                                                >
                                                    content_copy
                                                </span>
                                            </div>

                                            <pre className="editor">
                                                <code>
                                                    {codeValue == 1?
                                                        (
                                                            `
                                                            import { ScreenReader, Table, Tbody, Td, Th, Thead, Tr } from '@visa/nova-react';
                                                            import { CSSProperties } from 'react';

                                                            export const LargePaddingBandedTable = () => {
                                                                return (
                                                                    <Table
                                                                        alternate
                                                                        style={{
                                                                            '--v-table-data-padding-block-default': 'var(--v-table-data-padding-block-large)',
                                                                            '--v-table-data-block-default': 'var(--v-table-data-block-large)',
                                                                        } as CSSProperties}
                                                                    >
                                                                        <ScreenReader tag="caption">Table with large padding and banded rows.</ScreenReader>
                                                                        <Thead>
                                                                            <Tr>
                                                                                <Th scope="col">Column A</Th>
                                                                                <Th scope="col">Column B</Th>
                                                                                <Th scope="col">Column C</Th>
                                                                                <Th scope="col">Column D</Th>
                                                                            </Tr>
                                                                        </Thead>
                                                                        <Tbody>
                                                                            <Tr>
                                                                                <Td>A1</Td>
                                                                                <Td>B1</Td>
                                                                                <Td>C1</Td>
                                                                                <Td>D1</Td>
                                                                            </Tr>
                                                                            <Tr>
                                                                                <Td>A2</Td>
                                                                                <Td>B2</Td>
                                                                                <Td>C2</Td>
                                                                                <Td>D2</Td>
                                                                            </Tr>
                                                                            <Tr>
                                                                                <Td>A3</Td>
                                                                                <Td>B3</Td>
                                                                                <Td>C3</Td>
                                                                                <Td>D3</Td>
                                                                            </Tr>
                                                                        </Tbody>
                                                                    </Table>
                                                                );
                                                            };
                                                            `
                                                        )

                                                        :

                                                        (
                                                            `
                                                                <table v-table [alternate]="true" tableSize="large">
                                                                    <caption vSR>
                                                                        Table with large padding and banded rows.
                                                                    </caption>
                                                                    <thead>
                                                                        <tr v-tr>
                                                                        <ng-container>
                                                                            <th *ngFor="let colItem of columnData | slice:0:4" v-th scope="col">{{ colItem }}</th>
                                                                        </ng-container>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody v-tbody>
                                                                        <tr v-tr *ngFor="let rowItem of rowData | slice:0:3">
                                                                        <td v-td>{{ rowItem['col-a'] }}</td>
                                                                        <td v-td>{{ rowItem['col-b'] }}</td>
                                                                        <td v-td>{{ rowItem['col-c'] }}</td>
                                                                        <td v-td>{{ rowItem['col-d'] }}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            `
                                                        )
                                                    }
                                                    
                                                </code>
                                            </pre>
                                        </div>
                                    </div>
                                </div>

                               
                            </>
                        }

                        {submenu == 1 &&
                            <div className="row" style={{height:'75%'}}>
                                <div className="col-12 h-100">
                                    <div className="container-custom">
                                        <img 
                                            className="animate__animated animate__fadeIn"
                                            style={{
                                                width:'100%',
                                                height:'100%',
                                                objectFit:'contain'
                                            }}
                                            src={require('../1.png')} 
                                        />
                                    </div>
                                </div>
                            </div>
                        }

                        {submenu == 2 &&
                            <div className="row" style={{height:'75%'}}>
                                <div className="col-12 h-100">
                                    <div className="container-custom">
                                        <img 
                                            className="animate__animated animate__fadeIn"
                                            style={{
                                                width:'100%',
                                                height:'100%',
                                                objectFit:'contain'
                                            }}
                                            src={require('../2.png')} 
                                        />
                                    </div>
                                </div>
                            </div>
                        }

                        <div className="row" style={{height:'20%'}}>
                            <div className="col-12">
                                <div className="d-flex container-custom" style={{height:'60%'}}>
                                    <div 
                                        className={`menuBtn ${submenu == 0 && 'active'}`}
                                        onClick={() => setSubmenu(0)}
                                    >
                                        Code
                                    </div>

                                    <div 
                                        className={`menuBtn ${submenu == 1 && 'active'}`}
                                        onClick={() => setSubmenu(1)}
                                    >Usage</div>

                                    <div className={`menuBtn ${submenu == 2 && 'active'}`} onClick={() => setSubmenu(2)} style={{marginRight:0}}>Accessibility</div>
                                </div>

                            
                            </div>
                        </div>
                        
                       
                    </>
                }
               
            </div>
            
           
        </div>
    )
}

export default Search