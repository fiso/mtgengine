"use strict";
const Constants = require ("../../../Constants");
const LightningElementalBase = require("../setBRB/LightningElemental");

class LightningElemental extends LightningElementalBase {
  constructor (game) {
    super(game, "Lightning Elemental", "Magic 2010", "M10");
  }
}

module.exports = LightningElemental;
