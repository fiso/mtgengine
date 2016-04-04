"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tidewalker extends Card {
  constructor(game) {
    super(game, "Tidewalker", "Planar Chaos", "PLC");
  }
}

module.exports = Tidewalker;
