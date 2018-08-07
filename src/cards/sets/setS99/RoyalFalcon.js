"use strict";
const Constants = require ("../../../Constants");
const RoyalFalconBase = require("../setS00/RoyalFalcon");

class RoyalFalcon extends RoyalFalconBase {
  constructor (game) {
    super(game, "Royal Falcon", "Starter 1999", "S99");
  }
}

module.exports = RoyalFalcon;
