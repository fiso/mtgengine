"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MetallicSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Metallic Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = MetallicSliver;
