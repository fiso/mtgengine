"use strict";
const Constants = require ("../../../Constants");
const FaultgrinderBase = require("../setLRW/Faultgrinder");

class Faultgrinder extends FaultgrinderBase {
  constructor (game) {
    super(game, "Faultgrinder", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Faultgrinder;
