"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GroundSeal extends Card {
  constructor(game) {
    super(game, "Ground Seal", "Magic 2013", "M13");
  }
}

module.exports = GroundSeal;
