"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuTitan extends Card {
  constructor(game) {
    super(game, "Kavu Titan", "Invasion", "INV");
  }
}

module.exports = KavuTitan;
