"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneforgeAcolyte extends Card {
  constructor(game) {
    super(game, "Stoneforge Acolyte", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StoneforgeAcolyte;
