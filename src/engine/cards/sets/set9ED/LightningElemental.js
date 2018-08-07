"use strict";
const Constants = require ("../../../Constants");
const LightningElementalBase = require("../setM12/LightningElemental");

class LightningElemental extends LightningElementalBase {
  constructor (game) {
    super(game, "Lightning Elemental", "Ninth Edition", "9ED");
  }
}

module.exports = LightningElemental;
