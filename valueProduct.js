const items =([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
         { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        
    ]);
    let totalProduct=0
    for (let i=0;i<items.length;i++){
        totalProduct= totalProduct+items[i].value
    }
    console.log(totalProduct);