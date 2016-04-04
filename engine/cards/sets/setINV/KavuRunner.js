"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuRunner extends Card {
  constructor(game) {
    super(game, "Kavu Runner", "Invasion", "INV");
  }
}

module.exports = KavuRunner;
