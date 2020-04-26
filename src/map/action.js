
export const UPDATE = 'UPDATE';
export const WHOLECONTENT = 'WHOLECONTENT';


export const setContent = (data) => ({
    type: "UPDATE",
    payload: data
})
export const whole_content = (data) => ({
    type: "WHOLECONTENT",
    payload: data
})

