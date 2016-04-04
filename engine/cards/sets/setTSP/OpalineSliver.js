"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalineSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Opaline Sliver", "Time Spiral", "TSP");
  }
}

module.exports = OpalineSliver;
