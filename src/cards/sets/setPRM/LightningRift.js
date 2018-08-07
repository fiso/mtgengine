"use strict";
const Constants = require ("../../../Constants");
const LightningRiftBase = require("../setVMA/LightningRift");

class LightningRift extends LightningRiftBase {
  constructor (game) {
    super(game, "Lightning Rift", "Magic Online Promos", "PRM");
  }
}

module.exports = LightningRift;
