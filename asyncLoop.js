module.exports = (data, iterationCallback, finishedCallback) => {
    
    //Iteration index
    let index = 0;

    let iterate = () => {

        //Exit loop if loop has finished
        if (index >= data.length) {
            finishedCallback();
            return;
        }

        let next = () => {
            //Increment index and run another iteration
            index++; 
            iterate();
        }
        
        let exit = () => {
            index = data.length;
            iterate();
        }

        //Run iteration passing the current item in the array and the "next" function
        iterationCallback(data[index], next, exit);
    };

    //Begin loop by running first iteration
    iterate();
}   