"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaruSpiritualist extends Card {
  constructor(game) {
    super(game, "Daru Spiritualist", "Scourge", "SCG");
  }
}

module.exports = DaruSpiritualist;
