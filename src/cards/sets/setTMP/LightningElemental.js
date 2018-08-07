"use strict";
const Constants = require ("../../../Constants");
const LightningElementalBase = require("../setM12/LightningElemental");

class LightningElemental extends LightningElementalBase {
  constructor (game) {
    super(game, "Lightning Elemental", "Tempest", "TMP");
  }
}

module.exports = LightningElemental;
