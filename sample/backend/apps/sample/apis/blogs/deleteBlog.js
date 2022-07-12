/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed LICENSE file.
*/
// Custom modules

const API_CONSTANTS = require(`${CONSTANTS.APPROOTDIR}/sample/apis/lib/constants`);
const simpleUpdate  = require(`${CONSTANTS.APPROOTDIR}/sample/db/db`).simpleUpdate;

exports.doService = async jsonReq => {

    // Validate API request and check mandatory payload required
    if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

    try {
        const r = await deleteBlog(jsonReq);
        if (!r) return API_CONSTANTS.API_RESPONSE_FALSE;

        return { result: true, blog: { r } };

    } catch (error) {
        console.error(error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

const deleteBlog = async (jsonReq) => {
    try {
        if (jsonReq){

            var query = 'delete from blog where id=?'
            var id = jsonReq.id

            return simpleUpdate(query,id)
        } 
    } catch (error) {
        throw error;
    }
}

const validateRequest = jsonReq => (jsonReq);