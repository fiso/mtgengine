"use strict";
const Constants = require ("../../../Constants");
const RoyalTrooperBase = require("../setME2/RoyalTrooper");

class RoyalTrooper extends RoyalTrooperBase {
  constructor(game) {
    super(game, "Royal Trooper", "Starter 1999", "S99");
  }
}

module.exports = RoyalTrooper;
