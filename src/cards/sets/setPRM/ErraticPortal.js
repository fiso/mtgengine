"use strict";
const Constants = require ("../../../Constants");
const ErraticPortalBase = require("../setTPR/ErraticPortal");

class ErraticPortal extends ErraticPortalBase {
  constructor (game) {
    super(game, "Erratic Portal", "Magic Online Promos", "PRM");
  }
}

module.exports = ErraticPortal;
