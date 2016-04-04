"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RathsEdge extends Card {
  constructor(game) {
    super(game, "Rath's Edge", "Nemesis", "NMS");
  }
}

module.exports = RathsEdge;
