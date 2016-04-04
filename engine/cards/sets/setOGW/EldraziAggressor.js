"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EldraziAggressor extends Card {
  constructor(game) {
    super(game, "Eldrazi Aggressor", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = EldraziAggressor;
