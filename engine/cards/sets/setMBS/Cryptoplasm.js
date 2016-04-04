"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cryptoplasm extends Card {
  constructor(game) {
    super(game, "Cryptoplasm", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Cryptoplasm;
