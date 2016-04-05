"use strict";
const Constants = require ("../../../Constants");
const DimirCharmBase = require("../setpFNM/DimirCharm");

class DimirCharm extends DimirCharmBase {
  constructor(game) {
    super(game, "Dimir Charm", "Gatecrash", "GTC");
  }
}

module.exports = DimirCharm;
