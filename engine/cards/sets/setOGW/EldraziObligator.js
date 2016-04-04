"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EldraziObligator extends Card {
  constructor(game) {
    super(game, "Eldrazi Obligator", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = EldraziObligator;
