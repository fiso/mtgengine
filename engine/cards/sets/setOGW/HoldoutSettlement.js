"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HoldoutSettlement extends Card {
  constructor(game) {
    super(game, "Holdout Settlement", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HoldoutSettlement;
