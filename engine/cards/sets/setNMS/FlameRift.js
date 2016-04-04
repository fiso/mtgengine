"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlameRift extends Card {
  constructor(game) {
    super(game, "Flame Rift", "Nemesis", "NMS");
  }
}

module.exports = FlameRift;
