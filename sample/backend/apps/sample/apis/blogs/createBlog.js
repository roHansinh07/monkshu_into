/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed LICENSE file.
*/

// Custom modules

const API_CONSTANTS = require(`${CONSTANTS.APPROOTDIR}/sample/apis/lib/constants`);
const simpleInsert  = require(`${CONSTANTS.APPROOTDIR}/sample/db/db`).simpleInsert;

exports.doService = async jsonReq => {

    // Validate API request and check mandatory payload required
    if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

    try {
        const r = await createBlog(jsonReq);
        if (!r) return API_CONSTANTS.API_RESPONSE_FALSE;

        return { result: true, results: { r } };

    } catch (error) {
        console.error(error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

const createBlog = async (jsonReq) => {
    try {
        if (jsonReq){
            
            return simpleInsert('blog',jsonReq)
        } 
    } catch (error) {
        throw error;
    }
}

const validateRequest = jsonReq => (jsonReq);