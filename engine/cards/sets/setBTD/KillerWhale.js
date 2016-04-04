"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillerWhale extends UnimplementedCard {
  constructor(game) {
    super(game, "Killer Whale", "Beatdown Box Set", "BTD");
  }
}

module.exports = KillerWhale;
