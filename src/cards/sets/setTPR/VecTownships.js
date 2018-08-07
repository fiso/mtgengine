"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VecTownships extends UnimplementedCard {
  constructor (game) {
    super(game, "Vec Townships", "Tempest Remastered", "TPR");
  }
}

module.exports = VecTownships;
