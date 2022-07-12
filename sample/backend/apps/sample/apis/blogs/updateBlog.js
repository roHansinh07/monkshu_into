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
        const r = await updateBlog(jsonReq);
        if (!r) return API_CONSTANTS.API_RESPONSE_FALSE;

        return { result: true, blog: { r } };

    } catch (error) {
        console.error(error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

const updateBlog = async (jsonReq) => {
    try {
        if (jsonReq){

            var query = 'update blog set name=? where id=?';
            var id = jsonReq.id
            var name = jsonReq.name

            return simpleUpdate(query,[name,id])
        } 
    } catch (error) {
        throw error;
    }
}

const validateRequest = jsonReq => (jsonReq);