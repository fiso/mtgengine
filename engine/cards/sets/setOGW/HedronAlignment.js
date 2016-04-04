"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HedronAlignment extends Card {
  constructor(game) {
    super(game, "Hedron Alignment", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HedronAlignment;
