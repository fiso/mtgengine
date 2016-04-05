"use strict";
const Constants = require ("../../../Constants");
const ThunderThrashElderBase = require("../setPC2/ThunderThrashElder");

class ThunderThrashElder extends ThunderThrashElderBase {
  constructor(game) {
    super(game, "Thunder-Thrash Elder", "Shards of Alara", "ALA");
  }
}

module.exports = ThunderThrashElder;
