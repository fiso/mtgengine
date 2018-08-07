"use strict";
const Constants = require ("../../../Constants");
const LightningBlastBase = require("../setTPR/LightningBlast");

class LightningBlast extends LightningBlastBase {
  constructor (game) {
    super(game, "Lightning Blast", "Eighth Edition", "8ED");
  }
}

module.exports = LightningBlast;
