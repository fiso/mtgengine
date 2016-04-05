"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinneretSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Spinneret Sliver", "Time Spiral", "TSP");
  }
}

module.exports = SpinneretSliver;
