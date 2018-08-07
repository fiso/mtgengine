"use strict";
const Constants = require ("../../../Constants");
const GerrardsBattleCryBase = require("../setTPR/GerrardsBattleCry");

class GerrardsBattleCry extends GerrardsBattleCryBase {
  constructor (game) {
    super(game, "Gerrard's Battle Cry", "Tempest", "TMP");
  }
}

module.exports = GerrardsBattleCry;
