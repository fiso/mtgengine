"use strict";
const Constants = require ("../../../Constants");
const ErraticPortalBase = require("../setEXO/ErraticPortal");

class ErraticPortal extends ErraticPortalBase {
  constructor(game) {
    super(game, "Erratic Portal", "Tempest Remastered", "TPR");
  }
}

module.exports = ErraticPortal;
