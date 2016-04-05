"use strict";
const Constants = require ("../../../Constants");
const SkarrgtheRagePitsBase = require("../setDDL/SkarrgtheRagePits");

class SkarrgtheRagePits extends SkarrgtheRagePitsBase {
  constructor(game) {
    super(game, "Skarrg, the Rage Pits", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = SkarrgtheRagePits;
