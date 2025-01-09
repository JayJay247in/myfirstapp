function App(props) {
    const currDate = new Date();

    return (
        <div>
            <h1>Hi!, I'm Jay Jay and this is my first react project</h1>            
            <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
            <h2>Today's Date is {currDate.toLocaleDateString()}.</h2>
        </div>
    );
}

export default App;