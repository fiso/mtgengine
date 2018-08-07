"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PineBarrens extends UnimplementedCard {
  constructor (game) {
    super(game, "Pine Barrens", "Tempest Remastered", "TPR");
  }
}

module.exports = PineBarrens;
