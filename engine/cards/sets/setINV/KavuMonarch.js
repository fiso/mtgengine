"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuMonarch extends Card {
  constructor(game) {
    super(game, "Kavu Monarch", "Invasion", "INV");
  }
}

module.exports = KavuMonarch;
