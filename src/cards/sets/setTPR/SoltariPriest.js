"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoltariPriest extends UnimplementedCard {
  constructor (game) {
    super(game, "Soltari Priest", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariPriest;
