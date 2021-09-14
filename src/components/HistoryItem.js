const HistoryItem = (props) => {
    const {exp} = props
    // console.log(exp)
    
    return (
        <>
        {exp.map(exp => (
            <li className="minus">
            {exp.msg}<span>{exp.value}</span><button className="delete-btn">x</button>
            </li>
        ))}
        
        </>
    );
}
 
export default HistoryItem;