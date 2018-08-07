"use strict";
const Constants = require ("../../../Constants");
const WolfbriarElementalBase = require("../setCMA/WolfbriarElemental");

class WolfbriarElemental extends WolfbriarElementalBase {
  constructor (game) {
    super(game, "Wolfbriar Elemental", "Modern Masters 2015", "MM2");
  }
}

module.exports = WolfbriarElemental;
