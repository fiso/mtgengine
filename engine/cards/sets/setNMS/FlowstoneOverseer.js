"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlowstoneOverseer extends Card {
  constructor(game) {
    super(game, "Flowstone Overseer", "Nemesis", "NMS");
  }
}

module.exports = FlowstoneOverseer;
