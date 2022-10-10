const logger = require('./logger');

function _error(num){
    if (num !== 0){
        return "diferente de cero"
    }
    throw new Error("error inventado")

}
try{
    men = _error(0)
    logger.info(men);
}catch(e){
    
    logger.error(e.message)
}
