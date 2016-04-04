"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuietDisrepair extends Card {
  constructor(game) {
    super(game, "Quiet Disrepair", "Future Sight", "FUT");
  }
}

module.exports = QuietDisrepair;
