"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MakindiAeronaut extends Card {
  constructor(game) {
    super(game, "Makindi Aeronaut", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MakindiAeronaut;
