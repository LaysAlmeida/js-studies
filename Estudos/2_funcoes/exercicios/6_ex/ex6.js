function verificaTipoDoDado (data) {
    if (typeof(data) === "number") {
        console.log(`${data} é do tipo number`);
    } else if (typeof(data) == "string") {
        console.log(`${data} é do tipo string`);
    } else {
        console.log(`${data} é do tipo boolean`);
    }
}

verificaTipoDoDado(true);
verificaTipoDoDado(20);
verificaTipoDoDado("Bruno");