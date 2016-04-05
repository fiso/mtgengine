"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlowstoneChanneler extends UnimplementedCard {
  constructor(game) {
    super(game, "Flowstone Channeler", "Time Spiral", "TSP");
  }
}

module.exports = FlowstoneChanneler;
