"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RenegadeWarlord extends UnimplementedCard {
  constructor (game) {
    super(game, "Renegade Warlord", "Tempest Remastered", "TPR");
  }
}

module.exports = RenegadeWarlord;
