"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnapsailGlider extends Card {
  constructor(game) {
    super(game, "Snapsail Glider", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SnapsailGlider;
