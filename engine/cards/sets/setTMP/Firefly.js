"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Firefly extends Card {
  constructor(game) {
    super(game, "Firefly", "Tempest", "TMP");
  }
}

module.exports = Firefly;
