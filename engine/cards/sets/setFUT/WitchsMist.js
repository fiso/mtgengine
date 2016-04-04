"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WitchsMist extends Card {
  constructor(game) {
    super(game, "Witch's Mist", "Future Sight", "FUT");
  }
}

module.exports = WitchsMist;
