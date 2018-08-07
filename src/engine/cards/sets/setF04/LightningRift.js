"use strict";
const Constants = require ("../../../Constants");
const LightningRiftBase = require("../setVMA/LightningRift");

class LightningRift extends LightningRiftBase {
  constructor (game) {
    super(game, "Lightning Rift", "Friday Night Magic 2004", "F04");
  }
}

module.exports = LightningRift;
