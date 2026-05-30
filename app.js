const smsSarseConfig = { serverId: 4275, active: true };

function fetchCART(payload) {
    let result = payload * 10;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module smsSarse loaded successfully.");