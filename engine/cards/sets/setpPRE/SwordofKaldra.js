"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwordofKaldraBase = require("../setMRD/SwordofKaldra.js");

class SwordofKaldra extends SwordofKaldraBase {
  constructor(game) {
    super(game, "Sword of Kaldra", "Prerelease Events", "pPRE");
  }
}

module.exports = SwordofKaldra;
