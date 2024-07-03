export default function Fruits() {
    const fruits=['apple', 'mango', 'orange']
    return <div>
        <ul>
        <h3>{fruits.map(fruit=>
            <li key={fruit}>{fruit}</li>
        )}</h3>
        </ul>
    </div>
}