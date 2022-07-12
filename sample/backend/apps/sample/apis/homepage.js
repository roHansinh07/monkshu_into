// Custom modules
const API_CONSTANTS = require(`${CONSTANTS.APPROOTDIR}/sample/apis/lib/constants`);


exports.doService = async jsonReq => {

    // Validate API request and check mandatory payload required
    if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

    try {
        const result = await getHome(jsonReq);
        if (!result) return API_CONSTANTS.API_RESPONSE_FALSE;
        return { result: true, data: { result } };

    } catch (error) {
        console.error(error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

const getHome = async (jsonReq) =>{
    try{
        if(jsonReq){
            return "Hi Homepage"
        }
        else{
            return 'Homepage'
        }
    }
    catch(error){
        throw error
    }
}

const validateRequest = jsonReq => (jsonReq);