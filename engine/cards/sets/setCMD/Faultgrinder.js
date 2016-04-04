"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FaultgrinderBase = require("../setLRW/Faultgrinder.js");

class Faultgrinder extends FaultgrinderBase {
  constructor(game) {
    super(game, "Faultgrinder", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Faultgrinder;
