"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Timecrafting extends Card {
  constructor(game) {
    super(game, "Timecrafting", "Planar Chaos", "PLC");
  }
}

module.exports = Timecrafting;
