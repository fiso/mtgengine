"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TalasAirShip extends Card {
  constructor(game) {
    super(game, "Talas Air Ship", "Portal Second Age", "PO2");
  }
}

module.exports = TalasAirShip;
