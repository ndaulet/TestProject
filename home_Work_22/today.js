export function getDay(){
    const today = new Date()
    const arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return arr[today.getDay()]
}