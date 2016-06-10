"use strict";
const Constants = require ("../../../Constants");
const WolfbriarElementalBase = require("../setC14/WolfbriarElemental");

class WolfbriarElemental extends WolfbriarElementalBase {
  constructor (game) {
    super(game, "Wolfbriar Elemental", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = WolfbriarElemental;
