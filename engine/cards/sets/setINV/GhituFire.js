"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhituFire extends Card {
  constructor(game) {
    super(game, "Ghitu Fire", "Invasion", "INV");
  }
}

module.exports = GhituFire;
