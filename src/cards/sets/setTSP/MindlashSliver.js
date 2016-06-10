"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindlashSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindlash Sliver", "Time Spiral", "TSP");
  }
}

module.exports = MindlashSliver;
