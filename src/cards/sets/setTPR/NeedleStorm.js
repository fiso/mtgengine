"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeedleStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Needle Storm", "Tempest Remastered", "TPR");
  }
}

module.exports = NeedleStorm;
