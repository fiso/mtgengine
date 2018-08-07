"use strict";
const Constants = require ("../../../Constants");
const ShieldoftheAgesBase = require("../setMED/ShieldoftheAges");

class ShieldoftheAges extends ShieldoftheAgesBase {
  constructor (game) {
    super(game, "Shield of the Ages", "Ice Age", "ICE");
  }
}

module.exports = ShieldoftheAges;
