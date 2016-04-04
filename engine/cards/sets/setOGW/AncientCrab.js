"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientCrab extends Card {
  constructor(game) {
    super(game, "Ancient Crab", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = AncientCrab;
