"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcidicSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Acidic Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = AcidicSliver;
