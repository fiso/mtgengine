"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FistsofIronwood extends Card {
  constructor(game) {
    super(game, "Fists of Ironwood", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = FistsofIronwood;
