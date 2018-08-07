"use strict";
const Constants = require ("../../../Constants");
const SwordofBodyandMindBase = require("../setMPS/SwordofBodyandMind");

class SwordofBodyandMind extends SwordofBodyandMindBase {
  constructor (game) {
    super(game, "Sword of Body and Mind", "From the Vault: Relics", "V10");
  }
}

module.exports = SwordofBodyandMind;
