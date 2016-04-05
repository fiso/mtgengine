"use strict";
const Constants = require ("../../../Constants");
const GerrardsBattleCryBase = require("../setTMP/GerrardsBattleCry");

class GerrardsBattleCry extends GerrardsBattleCryBase {
  constructor(game) {
    super(game, "Gerrard's Battle Cry", "Vintage Masters", "VMA");
  }
}

module.exports = GerrardsBattleCry;
