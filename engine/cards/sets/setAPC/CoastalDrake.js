"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoastalDrake extends Card {
  constructor(game) {
    super(game, "Coastal Drake", "Apocalypse", "APC");
  }
}

module.exports = CoastalDrake;
