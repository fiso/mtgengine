"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AirElementalBase = require("../setBRB/AirElemental.js");

class AirElemental extends AirElementalBase {
  constructor(game) {
    super(game, "Air Elemental", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = AirElemental;
