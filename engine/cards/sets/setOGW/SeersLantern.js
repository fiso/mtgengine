"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeersLantern extends Card {
  constructor(game) {
    super(game, "Seer's Lantern", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SeersLantern;
