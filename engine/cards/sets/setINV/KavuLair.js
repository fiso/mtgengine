"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuLair extends Card {
  constructor(game) {
    super(game, "Kavu Lair", "Invasion", "INV");
  }
}

module.exports = KavuLair;
