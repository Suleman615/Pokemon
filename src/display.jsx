import React from "react";

const Display = (props) => {





    return (
        <>
            <div className="display">

                <h1>{props.name}</h1>
                <div> {!props.found && !props.error && <h4 h4 > Please Submit a <br /> Pokemon!</h4>}

                    {props.found && !props.error && <img className="image" src={props.image} alt="" srcset="" />}
                    {props.error && !props.found && <><h3 >Error Finding Your Pokemon</h3>
                        <p>  please Check name and spelling of Your Pokemon</p>
                        <h2>Try Again</h2>

                    </>}

                </div>
                <table>
                    <thead>
                        <tr>
                            <th>species</th>
                            <th>color</th>
                            <th>Height</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.species}</td>
                            <td>{props.color}</td>
                            <td>{props.height}</td>
                        </tr>
                    </tbody>
                </table>

            </div >
        </>
    )
}


export default Display