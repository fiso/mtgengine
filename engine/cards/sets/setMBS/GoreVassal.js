"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoreVassal extends Card {
  constructor(game) {
    super(game, "Gore Vassal", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GoreVassal;
