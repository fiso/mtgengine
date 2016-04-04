"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarkBanishingBase = require("../setCST/DarkBanishing.js");

class DarkBanishing extends DarkBanishingBase {
  constructor(game) {
    super(game, "Dark Banishing", "Seventh Edition", "7ED");
  }
}

module.exports = DarkBanishing;
