"use strict";
const Constants = require ("../../../Constants");
const ThunderThrashElderBase = require("../setPCA/ThunderThrashElder");

class ThunderThrashElder extends ThunderThrashElderBase {
  constructor (game) {
    super(game, "Thunder-Thrash Elder", "Planechase 2012", "PC2");
  }
}

module.exports = ThunderThrashElder;
