"use strict";
const Constants = require ("../../../Constants");
const ShieldofKaldraBase = require("../setDST/ShieldofKaldra");

class ShieldofKaldra extends ShieldofKaldraBase {
  constructor (game) {
    super(game, "Shield of Kaldra", "Prerelease Events", "pPRE");
  }
}

module.exports = ShieldofKaldra;
