"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuScout extends Card {
  constructor(game) {
    super(game, "Kavu Scout", "Invasion", "INV");
  }
}

module.exports = KavuScout;
