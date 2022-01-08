import React from "react";

function useLocalStorage (itemName, initialValue) {
    // Desde este hook puedo llamar a otros hooks tanto de react como los creados por mi.
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    // Aqui este use effect se crea para simular la petición a una API.
    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;  
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          };
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        };
  
      },1000)
    });
  
    
  
    const saveItem = (newItem)=>{
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      };
    };
  
    return {
      item,
      saveItem, 
      loading,
      error
    };
  };

  export { useLocalStorage };