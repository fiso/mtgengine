"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlagueMyr extends Card {
  constructor(game) {
    super(game, "Plague Myr", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PlagueMyr;
