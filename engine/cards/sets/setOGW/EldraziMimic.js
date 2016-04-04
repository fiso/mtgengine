"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EldraziMimic extends Card {
  constructor(game) {
    super(game, "Eldrazi Mimic", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = EldraziMimic;
