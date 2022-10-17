import React from "react";

const phoneFormat = (phone) => {
    return `+${phone.substring(0, 2)} 
    (${phone.substring(2, 4)}) 
    ${phone.substring(4, 8)}-${phone.substring(8, 13)}`
};

export default phoneFormat;