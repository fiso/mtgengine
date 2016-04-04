"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MorbidPlunder extends Card {
  constructor(game) {
    super(game, "Morbid Plunder", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MorbidPlunder;
