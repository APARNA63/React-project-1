

import React from 'react'

const isArrayEmptyNew = (arr) => {
    if(arr !== undefined && arr !==null && arr.length > 0){
        return false
    }
    return true
}
export default isArrayEmptyNew