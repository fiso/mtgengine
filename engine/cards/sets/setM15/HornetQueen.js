"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornetQueen extends Card {
  constructor(game) {
    super(game, "Hornet Queen", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HornetQueen;
