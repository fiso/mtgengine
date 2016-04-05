"use strict";
const Constants = require ("../../../Constants");
const BrambleElementalBase = require("../setPC2/BrambleElemental");

class BrambleElemental extends BrambleElementalBase {
  constructor(game) {
    super(game, "Bramble Elemental", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BrambleElemental;
