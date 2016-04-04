"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DimirCharmBase = require("../setpFNM/DimirCharm.js");

class DimirCharm extends DimirCharmBase {
  constructor(game) {
    super(game, "Dimir Charm", "Gatecrash", "GTC");
  }
}

module.exports = DimirCharm;
