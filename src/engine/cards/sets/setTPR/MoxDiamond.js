"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxDiamond extends UnimplementedCard {
  constructor (game) {
    super(game, "Mox Diamond", "Tempest Remastered", "TPR");
  }
}

module.exports = MoxDiamond;
