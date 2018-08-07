"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornedSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Horned Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = HornedSliver;
