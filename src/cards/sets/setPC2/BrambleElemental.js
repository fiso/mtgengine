"use strict";
const Constants = require ("../../../Constants");
const BrambleElementalBase = require("../setPCA/BrambleElemental");

class BrambleElemental extends BrambleElementalBase {
  constructor (game) {
    super(game, "Bramble Elemental", "Planechase 2012", "PC2");
  }
}

module.exports = BrambleElemental;
