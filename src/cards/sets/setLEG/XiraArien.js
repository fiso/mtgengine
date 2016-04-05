"use strict";
const Constants = require ("../../../Constants");
const XiraArienBase = require("../setCHR/XiraArien");

class XiraArien extends XiraArienBase {
  constructor(game) {
    super(game, "Xira Arien", "Legends", "LEG");
  }
}

module.exports = XiraArien;
