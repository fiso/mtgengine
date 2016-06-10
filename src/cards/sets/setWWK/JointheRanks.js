"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JointheRanks extends UnimplementedCard {
  constructor (game) {
    super(game, "Join the Ranks", "Worldwake", "WWK");
  }
}

module.exports = JointheRanks;
