/*
 * @Author: KAAN
 * @Date: 2022-04-27 02:12:22
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-27 02:12:22
 * @Descripttion: 
 */

'use strict';

class ResponseStatus {
  Success(status, message, data) {
    return {
      code: 1,
      status: status || 200,
      message: message || 'success',
      data,
    };
  }

  // fail
  Fail(status, message) {
    return {
      code: 0,
      status: status || false,
      message: message || 'server error',
    };
  }
}

module.exports = new ResponseStatus();
