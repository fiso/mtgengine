"use strict";
const Constants = require ("../../../Constants");
const HengeGuardianBase = require("../setDDG/HengeGuardian");

class HengeGuardian extends HengeGuardianBase {
  constructor (game) {
    super(game, "Henge Guardian", "Mercadian Masques", "MMQ");
  }
}

module.exports = HengeGuardian;
