"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlowstoneWall extends Card {
  constructor(game) {
    super(game, "Flowstone Wall", "Nemesis", "NMS");
  }
}

module.exports = FlowstoneWall;
