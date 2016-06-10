"use strict";
const Constants = require ("../../../Constants");
const LightningElementalBase = require("../setBRB/LightningElemental");

class LightningElemental extends LightningElementalBase {
  constructor (game) {
    super(game, "Lightning Elemental", "Seventh Edition", "7ED");
  }
}

module.exports = LightningElemental;
