"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloakofInvisibility extends Card {
  constructor(game) {
    super(game, "Cloak of Invisibility", "Mirage", "MIR");
  }
}

module.exports = CloakofInvisibility;
