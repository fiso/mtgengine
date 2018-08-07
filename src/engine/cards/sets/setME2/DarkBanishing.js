"use strict";
const Constants = require ("../../../Constants");
const DarkBanishingBase = require("../setTPR/DarkBanishing");

class DarkBanishing extends DarkBanishingBase {
  constructor (game) {
    super(game, "Dark Banishing", "Masters Edition II", "ME2");
  }
}

module.exports = DarkBanishing;
