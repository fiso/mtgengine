"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GravityNegator extends Card {
  constructor(game) {
    super(game, "Gravity Negator", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GravityNegator;
