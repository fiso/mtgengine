"use strict";
const Constants = require ("../../../Constants");
const BalothNullBase = require("../setA25/BalothNull");

class BalothNull extends BalothNullBase {
  constructor (game) {
    super(game, "Baloth Null", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BalothNull;
