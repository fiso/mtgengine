"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AspiringAeronaut extends Card {
  constructor(game) {
    super(game, "Aspiring Aeronaut", "Magic Origins", "ORI");
  }
}

module.exports = AspiringAeronaut;
