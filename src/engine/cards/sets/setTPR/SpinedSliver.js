"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinedSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Spined Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = SpinedSliver;
