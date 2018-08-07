"use strict";
const Constants = require ("../../../Constants");
const LightningElementalBase = require("../setM12/LightningElemental");

class LightningElemental extends LightningElementalBase {
  constructor (game) {
    super(game, "Lightning Elemental", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = LightningElemental;
