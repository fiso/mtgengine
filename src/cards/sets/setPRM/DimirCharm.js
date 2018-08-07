"use strict";
const Constants = require ("../../../Constants");
const DimirCharmBase = require("../setGTC/DimirCharm");

class DimirCharm extends DimirCharmBase {
  constructor (game) {
    super(game, "Dimir Charm", "Magic Online Promos", "PRM");
  }
}

module.exports = DimirCharm;
