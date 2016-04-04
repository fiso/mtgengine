"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarpingWail extends Card {
  constructor(game) {
    super(game, "Warping Wail", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WarpingWail;
