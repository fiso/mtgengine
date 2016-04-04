"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ErraticPortalBase = require("../setEXO/ErraticPortal.js");

class ErraticPortal extends ErraticPortalBase {
  constructor(game) {
    super(game, "Erratic Portal", "Tempest Remastered", "TPR");
  }
}

module.exports = ErraticPortal;
