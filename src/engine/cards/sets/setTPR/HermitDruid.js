"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HermitDruid extends UnimplementedCard {
  constructor (game) {
    super(game, "Hermit Druid", "Tempest Remastered", "TPR");
  }
}

module.exports = HermitDruid;
