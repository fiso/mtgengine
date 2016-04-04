"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CanopyGorger extends Card {
  constructor(game) {
    super(game, "Canopy Gorger", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CanopyGorger;
