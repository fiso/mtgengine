"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllnessintheRanks extends UnimplementedCard {
  constructor(game) {
    super(game, "Illness in the Ranks", "Gatecrash", "GTC");
  }
}

module.exports = IllnessintheRanks;
