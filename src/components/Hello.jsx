
// function msg() {
//     return 'this is a function'
// }

function Hello({person}) {
    // props.name = 'raja'
    return <main >
                <h1>hi {person.name}</h1>
                <h2>Message: {person.message} {person.emoji}</h2>
                <h3>{person.seats}</h3>
                {/* <h2>Calculation {24+400}</h2> */}
                {/* <h3>function {msg()}</h3> */}
            </main>
}

export default Hello