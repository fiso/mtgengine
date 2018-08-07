"use strict";
const Constants = require ("../../../Constants");
const SwordofFeastandFamineBase = require("../setMPS/SwordofFeastandFamine");

class SwordofFeastandFamine extends SwordofFeastandFamineBase {
  constructor (game) {
    super(game, "Sword of Feast and Famine", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SwordofFeastandFamine;
