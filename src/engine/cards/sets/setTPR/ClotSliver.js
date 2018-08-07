"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClotSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Clot Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = ClotSliver;
