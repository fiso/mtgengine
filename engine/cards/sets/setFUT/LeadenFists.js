"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeadenFists extends Card {
  constructor(game) {
    super(game, "Leaden Fists", "Future Sight", "FUT");
  }
}

module.exports = LeadenFists;
