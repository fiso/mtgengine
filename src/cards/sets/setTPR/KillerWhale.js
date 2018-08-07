"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillerWhale extends UnimplementedCard {
  constructor (game) {
    super(game, "Killer Whale", "Tempest Remastered", "TPR");
  }
}

module.exports = KillerWhale;
