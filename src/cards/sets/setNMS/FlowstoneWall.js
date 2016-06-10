"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlowstoneWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Flowstone Wall", "Nemesis", "NMS");
  }
}

module.exports = FlowstoneWall;
