"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WreckingOgre extends Card {
  constructor(game) {
    super(game, "Wrecking Ogre", "Gatecrash", "GTC");
  }
}

module.exports = WreckingOgre;
