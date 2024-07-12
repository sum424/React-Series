export default function Fruits({name, price, emoji}) {
    return <>
        <ul>
            {/* {emoji} {name} {price} */}
            {price > 100 ? <li>{emoji} {name} {price}</li> : ""}
        </ul>
    </>
}