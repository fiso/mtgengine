"use strict";
const Constants = require ("../../../Constants");
const WolfbriarElementalBase = require("../setCMA/WolfbriarElemental");

class WolfbriarElemental extends WolfbriarElementalBase {
  constructor (game) {
    super(game, "Wolfbriar Elemental", "Commander 2014", "C14");
  }
}

module.exports = WolfbriarElemental;
