"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CathedralSanctifierBase = require("../setAVR/CathedralSanctifier.js");

class CathedralSanctifier extends CathedralSanctifierBase {
  constructor(game) {
    super(game, "Cathedral Sanctifier", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = CathedralSanctifier;
