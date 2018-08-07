"use strict";
const Constants = require ("../../../Constants");
const ThunderThrashElderBase = require("../setPCA/ThunderThrashElder");

class ThunderThrashElder extends ThunderThrashElderBase {
  constructor (game) {
    super(game, "Thunder-Thrash Elder", "Shards of Alara", "ALA");
  }
}

module.exports = ThunderThrashElder;
