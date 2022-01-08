const to = function(promise){
    return promise.then(res => {
        return [null, res];
    })
    .catch(err => {
        return [err, null];
    });
}

export default to;