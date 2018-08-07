"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LowlandBasilisk extends UnimplementedCard {
  constructor (game) {
    super(game, "Lowland Basilisk", "Tempest Remastered", "TPR");
  }
}

module.exports = LowlandBasilisk;
