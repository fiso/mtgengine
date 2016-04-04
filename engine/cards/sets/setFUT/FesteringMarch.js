"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FesteringMarch extends Card {
  constructor(game) {
    super(game, "Festering March", "Future Sight", "FUT");
  }
}

module.exports = FesteringMarch;
