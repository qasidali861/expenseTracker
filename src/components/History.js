import HistoryItem from "./HistoryItem"

const History = (props) => {
    const {expense} = props
    // console.log(expense)

    return ( 
        <>
            <div>
            <h3>History</h3>
            <ul id="list" className="list">
                <HistoryItem exp = {expense} />
            </ul>
            </div>

      </>
     );
}
 
export default History;