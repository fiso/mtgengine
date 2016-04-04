"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FleshEaterImp extends Card {
  constructor(game) {
    super(game, "Flesh-Eater Imp", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FleshEaterImp;
