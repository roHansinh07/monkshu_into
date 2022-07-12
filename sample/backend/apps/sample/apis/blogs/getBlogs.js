/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed LICENSE file.
*/

// Custom modules

const API_CONSTANTS = require(`${CONSTANTS.APPROOTDIR}/sample/apis/lib/constants`);
const simpleSelect  = require(`${CONSTANTS.APPROOTDIR}/sample/db/db`).simpleSelect;

exports.doService = async jsonReq => {

    // Validate API request and check mandatory payload required
    if (!validateRequest(jsonReq)) return API_CONSTANTS.API_INSUFFICIENT_PARAMS;

    try {
        const r = await getBlog(jsonReq);
        if (!r) return API_CONSTANTS.API_RESPONSE_FALSE;

        return { result: true, blog: { r } };

    } catch (error) {
        console.error(error);
        return API_CONSTANTS.API_RESPONSE_SERVER_ERROR;
    }
}

const getBlog = async (jsonReq) => {
    try {
        if (jsonReq){
           
            if(jsonReq.type == 'primary'){
                var query = 'select * from blog where id=?'
                var id = jsonReq.id
                var name = jsonReq.name

                return simpleSelect(query,[id,name])    
            }
            else if(jsonReq.type=='secondary'){
                var query = 'select * from blog'
                var id = jsonReq.id
                var name = jsonReq.name
                return simpleSelect(query,[id,name])
            }
            
        } 
    } catch (error) {
        throw error;
    }
}

const validateRequest = jsonReq => (jsonReq);