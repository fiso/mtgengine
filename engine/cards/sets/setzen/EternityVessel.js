"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EternityVessel extends Card {
  constructor(game) {
    super(game, "Eternity Vessel", "Zendikar", "ZEN");
  }
}

module.exports = EternityVessel;
