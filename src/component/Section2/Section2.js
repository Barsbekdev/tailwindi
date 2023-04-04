import React from 'react';
import git from "../img/6.png"
import {useState} from "react";
const Section2 = () => {
        const [modal,setModal]=useState(false)
    return (
        <div className="container">
            <div className="menu1">
                <div className="mini">

                    <center>      <img src={git} alt=""/></center>
                    <h1>Order Management</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/>Ut ut felis congue nisl hendrerit commodo.</p>
                    <button type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Choose plan
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="ali"><div className="mini">

                    <center>      <img src={git} alt=""/></center>
                    <h1>Order Management</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/>Ut ut felis congue nisl hendrerit commodo.</p>
                    <button type="button"  onClick={()=>setModal(!modal)}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Choose plan
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div></div>
                <div className="src"> <div className="mini">

                    <center>      <img src={git} alt=""/></center>
                    <h1>Order Management</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/>Ut ut felis congue nisl hendrerit commodo.</p>
                    <button type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Choose plan
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div></div>
            </div>
            {/*<center> <button className='btn' onClick={()=>setModal(!modal)} >Смотреть все объекты</button></center>*/}

            <div className="menu2" style={{
                display:modal?'block':"none"
            }}>
                <div className="mini">
                    <center>      <img src={git} alt=""/></center>
                    <h1>Order Management</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/>Ut ut felis congue nisl hendrerit commodo.</p>
                    <button type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Choose plan
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="ali"><div className="mini">

                    <center>      <img src={git} alt=""/></center>
                    <h1>Order Management</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/>Ut ut felis congue nisl hendrerit commodo.</p>
                    <button type="button"  onClick={()=>setModal(!modal)}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Choose plan
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div></div>
                <div className="src"> <div className="mini">

                    <center>      <img src={git} alt=""/></center>
                    <h1>Order Management</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br/> the adipiscing elit. Sed quis accumsan nisi <br/>Ut ut felis congue nisl hendrerit commodo.</p>
                    <button type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Choose plan
                        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div></div>
            </div>
        </div>
    );
};

export default Section2;