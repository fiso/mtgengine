"use strict";
const Constants = require ("../../../Constants");
const DarkBanishingBase = require("../setCST/DarkBanishing");

class DarkBanishing extends DarkBanishingBase {
  constructor(game) {
    super(game, "Dark Banishing", "Ninth Edition", "9ED");
  }
}

module.exports = DarkBanishing;
