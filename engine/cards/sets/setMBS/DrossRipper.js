"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrossRipper extends Card {
  constructor(game) {
    super(game, "Dross Ripper", "Mirrodin Besieged", "MBS");
  }
}

module.exports = DrossRipper;
