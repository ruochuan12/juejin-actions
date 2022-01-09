import { main } from '../src/index.js';
main().then(resArr => {
    const [err, res] = resArr;
    if(err){
        console.error(err);
        return;
    }
    console.log(res.err_msg);
});


