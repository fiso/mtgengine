"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CinderHellion extends Card {
  constructor(game) {
    super(game, "Cinder Hellion", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CinderHellion;
