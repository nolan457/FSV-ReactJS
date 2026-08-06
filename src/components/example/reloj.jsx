import { useState, useEffect } from "react";

function Clock(){
    const [hour, setHour] = useState(new Date());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setHour(new Date());
        }, 1000);

        return () => clearInterval(interval)
    }, []);

    return <p className="flex flex-col text-center font-semibold text-lg p-2 w-96 mx-auto my-2">La fecha y hora son: {hour.toLocaleDateString()} {hour.toLocaleTimeString()}</p>
}

export default Clock;