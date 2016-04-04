"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JacesSanctum extends Card {
  constructor(game) {
    super(game, "Jace's Sanctum", "Magic Origins", "ORI");
  }
}

module.exports = JacesSanctum;
