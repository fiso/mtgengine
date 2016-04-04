"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenFarseer extends Card {
  constructor(game) {
    super(game, "Aven Farseer", "Scourge", "SCG");
  }
}

module.exports = AvenFarseer;
