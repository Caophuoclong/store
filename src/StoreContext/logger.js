const logger = (reducer) => {
    return (prevState, action) => {
        const newState = reducer(prevState, action);
        console.group(action.type);
        console.log("Prev state: ", prevState);
        console.log("Action: ", action.type);
        console.log("New state: ", newState);
        console.groupEnd();
        return newState;

    }
}
export default logger;