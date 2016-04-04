"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RoyalTrooperBase = require("../setME2/RoyalTrooper.js");

class RoyalTrooper extends RoyalTrooperBase {
  constructor(game) {
    super(game, "Royal Trooper", "Starter 1999", "S99");
  }
}

module.exports = RoyalTrooper;
