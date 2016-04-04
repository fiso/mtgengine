"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DismantlingBlow extends Card {
  constructor(game) {
    super(game, "Dismantling Blow", "Invasion", "INV");
  }
}

module.exports = DismantlingBlow;
