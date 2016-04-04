"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GerrardsBattleCryBase = require("../setTMP/GerrardsBattleCry.js");

class GerrardsBattleCry extends GerrardsBattleCryBase {
  constructor(game) {
    super(game, "Gerrard's Battle Cry", "Vintage Masters", "VMA");
  }
}

module.exports = GerrardsBattleCry;
