"use strict";
const Constants = require ("../../../Constants");
const XiraArienBase = require("../setTD0/XiraArien");

class XiraArien extends XiraArienBase {
  constructor (game) {
    super(game, "Xira Arien", "Chronicles", "CHR");
  }
}

module.exports = XiraArien;
