import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ConditionalDisplay({ children }) {

    const location = useLocation();
    const [showChildren, setShowChildren] = useState(true);

    useEffect(() => {
        if(location.pathname === '/session') {
            setShowChildren(false);
        } else {
            setShowChildren(true);
        }
    }, [location]);

  return (
    <div>{showChildren && children}</div>
  )
}

export default ConditionalDisplay