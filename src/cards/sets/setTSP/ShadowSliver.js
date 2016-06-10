"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Shadow Sliver", "Time Spiral", "TSP");
  }
}

module.exports = ShadowSliver;
