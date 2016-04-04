"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesertDrake extends Card {
  constructor(game) {
    super(game, "Desert Drake", "Portal", "POR");
  }
}

module.exports = DesertDrake;
