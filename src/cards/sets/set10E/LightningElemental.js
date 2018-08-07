"use strict";
const Constants = require ("../../../Constants");
const LightningElementalBase = require("../setM12/LightningElemental");

class LightningElemental extends LightningElementalBase {
  constructor (game) {
    super(game, "Lightning Elemental", "Tenth Edition", "10E");
  }
}

module.exports = LightningElemental;
