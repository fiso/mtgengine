"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenWarhawk extends Card {
  constructor(game) {
    super(game, "Aven Warhawk", "Legions", "LGN");
  }
}

module.exports = AvenWarhawk;
