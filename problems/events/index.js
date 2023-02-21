// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor(){
        this.data = {};
    }
    // Register an event handler
    //check if an array or create an array with callback
    on(eventName, callback) {
        if(this.data[eventName]){
            this.data[eventName].push(callback);
        }else{
            this.data[eventName] = [callback];
        }

    }
  
    // Trigger all callbacks associated
    // with a given eventName
    //run each function inside the array
    trigger(eventName) {
        if(this.data[eventName]){
            this.data[eventName].forEach((fn)=>{
                fn();
            })
        }
    }
  
    // Remove all event handlers associated
    // with the given eventName
    //delete the specific event name from the object
    off(eventName) {
        delete this.data[eventName];
    }
  }

  const events = new Events();

  
  module.exports = Events;