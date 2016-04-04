"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shriekhorn extends Card {
  constructor(game) {
    super(game, "Shriekhorn", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Shriekhorn;
