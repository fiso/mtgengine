"use strict";
const Constants = require ("../../../Constants");
const FaultgrinderBase = require("../setCMD/Faultgrinder");

class Faultgrinder extends FaultgrinderBase {
  constructor (game) {
    super(game, "Faultgrinder", "Lorwyn", "LRW");
  }
}

module.exports = Faultgrinder;
