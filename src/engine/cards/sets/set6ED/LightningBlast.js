"use strict";
const Constants = require ("../../../Constants");
const LightningBlastBase = require("../setTPR/LightningBlast");

class LightningBlast extends LightningBlastBase {
  constructor (game) {
    super(game, "Lightning Blast", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LightningBlast;
