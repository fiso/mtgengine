"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiptidePilferer extends Card {
  constructor(game) {
    super(game, "Riptide Pilferer", "Planar Chaos", "PLC");
  }
}

module.exports = RiptidePilferer;
