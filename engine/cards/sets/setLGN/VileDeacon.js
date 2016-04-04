"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VileDeacon extends Card {
  constructor(game) {
    super(game, "Vile Deacon", "Legions", "LGN");
  }
}

module.exports = VileDeacon;
