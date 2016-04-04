"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Timebender extends Card {
  constructor(game) {
    super(game, "Timebender", "Planar Chaos", "PLC");
  }
}

module.exports = Timebender;
