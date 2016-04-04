"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeasonedMarshal extends Card {
  constructor(game) {
    super(game, "Seasoned Marshal", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SeasonedMarshal;
