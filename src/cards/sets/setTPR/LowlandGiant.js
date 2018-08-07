"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LowlandGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Lowland Giant", "Tempest Remastered", "TPR");
  }
}

module.exports = LowlandGiant;
