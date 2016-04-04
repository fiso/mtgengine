"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuAggressor extends Card {
  constructor(game) {
    super(game, "Kavu Aggressor", "Invasion", "INV");
  }
}

module.exports = KavuAggressor;
