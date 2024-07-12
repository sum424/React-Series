import Fruit from './Fruit'

export default function Fruits() {
    //const fruits=['apple', 'mango', 'orange']
    const fruits = [
        {name: 'apple', price: 150, emoji: '🍎'},
        {name: 'mango', price: 200, emoji: '🥭'},
        {name: 'banana', price: 50, emoji: '🍌'},

    ]
    return <div>
        <ul>
        <h3>{fruits.map(fruit=>
            <Fruit key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
            // <li key={fruit.name}>{fruit.name} ${fruit.price} {fruit.emoji}</li>
        )}</h3>
        </ul>
    </div>
}