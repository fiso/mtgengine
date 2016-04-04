"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HaloHunter extends Card {
  constructor(game) {
    super(game, "Halo Hunter", "Zendikar", "ZEN");
  }
}

module.exports = HaloHunter;
