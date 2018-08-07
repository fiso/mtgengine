"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MageilVec extends UnimplementedCard {
  constructor (game) {
    super(game, "Mage il-Vec", "Tempest Remastered", "TPR");
  }
}

module.exports = MageilVec;
