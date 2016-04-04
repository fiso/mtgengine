"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarksteelPlate extends Card {
  constructor(game) {
    super(game, "Darksteel Plate", "Mirrodin Besieged", "MBS");
  }
}

module.exports = DarksteelPlate;
