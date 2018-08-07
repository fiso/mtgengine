"use strict";
const Constants = require ("../../../Constants");
const DarkBanishingBase = require("../setTPR/DarkBanishing");

class DarkBanishing extends DarkBanishingBase {
  constructor (game) {
    super(game, "Dark Banishing", "Mirage", "MIR");
  }
}

module.exports = DarkBanishing;
