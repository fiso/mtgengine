"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GerrardsBattleCry extends UnimplementedCard {
  constructor (game) {
    super(game, "Gerrard's Battle Cry", "Tempest Remastered", "TPR");
  }
}

module.exports = GerrardsBattleCry;
