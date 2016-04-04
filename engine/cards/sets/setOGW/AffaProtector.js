"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AffaProtector extends Card {
  constructor(game) {
    super(game, "Affa Protector", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = AffaProtector;
