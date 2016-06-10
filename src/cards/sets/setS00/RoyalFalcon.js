"use strict";
const Constants = require ("../../../Constants");
const RoyalFalconBase = require("../setS99/RoyalFalcon");

class RoyalFalcon extends RoyalFalconBase {
  constructor (game) {
    super(game, "Royal Falcon", "Starter 2000", "S00");
  }
}

module.exports = RoyalFalcon;
