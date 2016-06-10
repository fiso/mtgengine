"use strict";
const Constants = require ("../../../Constants");
const LightningRiftBase = require("../setpFNM/LightningRift");

class LightningRift extends LightningRiftBase {
  constructor (game) {
    super(game, "Lightning Rift", "Vintage Masters", "VMA");
  }
}

module.exports = LightningRift;
