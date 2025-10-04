function printStatement(e) {
    console.log(e.target.innerText);
    e.target.innerText = "Clicked";
    console.log("Button Clicked");
}

function Content() {
    return(
        <>
        <h1>Learn Phase</h1>
        <button onClick={(e) =>printStatement(e)}>
            Click Me
        </button>
        </>
    )
}

export default Content;