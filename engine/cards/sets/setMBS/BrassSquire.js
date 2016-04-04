"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrassSquire extends Card {
  constructor(game) {
    super(game, "Brass Squire", "Mirrodin Besieged", "MBS");
  }
}

module.exports = BrassSquire;
