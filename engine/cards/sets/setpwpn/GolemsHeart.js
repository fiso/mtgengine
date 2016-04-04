"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GolemsHeartBase = require("../setSOM/GolemsHeart.js");

class GolemsHeart extends GolemsHeartBase {
  constructor(game) {
    super(game, "Golem's Heart", "WPN and Gateway", "pWPN");
  }
}

module.exports = GolemsHeart;
