"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HengeGuardianBase = require("../setDDG/HengeGuardian.js");

class HengeGuardian extends HengeGuardianBase {
  constructor(game) {
    super(game, "Henge Guardian", "Mercadian Masques", "MMQ");
  }
}

module.exports = HengeGuardian;
