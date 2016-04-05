"use strict";
const Constants = require ("../../../Constants");
const ShieldoftheAgesBase = require("../setICE/ShieldoftheAges");

class ShieldoftheAges extends ShieldoftheAgesBase {
  constructor(game) {
    super(game, "Shield of the Ages", "Masters Edition", "MED");
  }
}

module.exports = ShieldoftheAges;
