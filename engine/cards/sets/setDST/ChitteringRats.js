"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChitteringRats extends Card {
  constructor(game) {
    super(game, "Chittering Rats", "Darksteel", "DST");
  }
}

module.exports = ChitteringRats;
