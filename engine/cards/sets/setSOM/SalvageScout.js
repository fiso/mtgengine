"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SalvageScout extends Card {
  constructor(game) {
    super(game, "Salvage Scout", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SalvageScout;
