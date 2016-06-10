"use strict";
const Constants = require ("../../../Constants");
const SwordofKaldraBase = require("../setMRD/SwordofKaldra");

class SwordofKaldra extends SwordofKaldraBase {
  constructor (game) {
    super(game, "Sword of Kaldra", "Prerelease Events", "pPRE");
  }
}

module.exports = SwordofKaldra;
