/*
 * @Author: KAAN
 * @Date: 2022-04-27 02:11:37
 * @LastEditors: KAAN
 * @LastEditTime: 2022-04-28 18:21:57
 * @Descripttion: 
 */

'use strict';

const crypto = require('crypto');
const { SECRET } = require('../../config/secret');

const generatePassword = str => {
  return crypto.createHmac('sha256', SECRET).update(str).digest('hex');
};

module.exports = { generatePassword };
