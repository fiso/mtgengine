"use strict";
const Constants = require ("../../../Constants");
const SwordofWarandPeaceBase = require("../setMPS/SwordofWarandPeace");

class SwordofWarandPeace extends SwordofWarandPeaceBase {
  constructor (game) {
    super(game, "Sword of War and Peace", "New Phyrexia", "NPH");
  }
}

module.exports = SwordofWarandPeace;
