"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JointheRanks extends Card {
  constructor(game) {
    super(game, "Join the Ranks", "Worldwake", "WWK");
  }
}

module.exports = JointheRanks;
