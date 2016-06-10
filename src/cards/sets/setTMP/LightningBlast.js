"use strict";
const Constants = require ("../../../Constants");
const LightningBlastBase = require("../set6ED/LightningBlast");

class LightningBlast extends LightningBlastBase {
  constructor (game) {
    super(game, "Lightning Blast", "Tempest", "TMP");
  }
}

module.exports = LightningBlast;
