"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbedLightning extends Card {
  constructor(game) {
    super(game, "Barbed Lightning", "Darksteel", "DST");
  }
}

module.exports = BarbedLightning;
