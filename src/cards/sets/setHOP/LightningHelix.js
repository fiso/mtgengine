"use strict";
const Constants = require ("../../../Constants");
const LightningHelixBase = require("../setDDH/LightningHelix");

class LightningHelix extends LightningHelixBase {
  constructor (game) {
    super(game, "Lightning Helix", "Planechase", "HOP");
  }
}

module.exports = LightningHelix;
