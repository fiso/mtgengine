"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnknownShores extends Card {
  constructor(game) {
    super(game, "Unknown Shores", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = UnknownShores;
