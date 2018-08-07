"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkBanishing extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Banishing", "Tempest Remastered", "TPR");
  }
}

module.exports = DarkBanishing;
