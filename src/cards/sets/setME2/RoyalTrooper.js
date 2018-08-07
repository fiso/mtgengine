"use strict";
const Constants = require ("../../../Constants");
const RoyalTrooperBase = require("../setBBD/RoyalTrooper");

class RoyalTrooper extends RoyalTrooperBase {
  constructor (game) {
    super(game, "Royal Trooper", "Masters Edition II", "ME2");
  }
}

module.exports = RoyalTrooper;
