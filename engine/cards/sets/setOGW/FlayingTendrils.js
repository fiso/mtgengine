"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlayingTendrils extends Card {
  constructor(game) {
    super(game, "Flaying Tendrils", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = FlayingTendrils;
