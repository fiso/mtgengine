"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShieldofKaldraBase = require("../setDST/ShieldofKaldra.js");

class ShieldofKaldra extends ShieldofKaldraBase {
  constructor(game) {
    super(game, "Shield of Kaldra", "Prerelease Events", "pPRE");
  }
}

module.exports = ShieldofKaldra;
