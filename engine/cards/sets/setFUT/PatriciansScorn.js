"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PatriciansScorn extends Card {
  constructor(game) {
    super(game, "Patrician's Scorn", "Future Sight", "FUT");
  }
}

module.exports = PatriciansScorn;
