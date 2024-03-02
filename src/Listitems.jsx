import React  from "react"
function Listitems(props){
    return(
       <React.Fragment>
        {
            props.masivi.map(item => <p>{item}</p>)
        }
        </React.Fragment>
    )
}
export default Listitems