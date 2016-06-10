"use strict";
const Constants = require ("../../../Constants");
const WolfbriarElementalBase = require("../setC14/WolfbriarElemental");

class WolfbriarElemental extends WolfbriarElementalBase {
  constructor (game) {
    super(game, "Wolfbriar Elemental", "Worldwake", "WWK");
  }
}

module.exports = WolfbriarElemental;
