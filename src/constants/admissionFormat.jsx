import React from "react";

const admissionFormat = (admission) => {
    const date = new Date(admission).toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    
    return date;
};

export default admissionFormat;