"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrambleElementalBase = require("../setPC2/BrambleElemental.js");

class BrambleElemental extends BrambleElementalBase {
  constructor(game) {
    super(game, "Bramble Elemental", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BrambleElemental;
