"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VictualSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Victual Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = VictualSliver;
