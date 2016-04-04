"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorosElite extends Card {
  constructor(game) {
    super(game, "Boros Elite", "Gatecrash", "GTC");
  }
}

module.exports = BorosElite;
