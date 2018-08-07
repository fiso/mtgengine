"use strict";
const Constants = require ("../../../Constants");
const DimirCharmBase = require("../setGTC/DimirCharm");

class DimirCharm extends DimirCharmBase {
  constructor (game) {
    super(game, "Dimir Charm", "Friday Night Magic 2013", "F13");
  }
}

module.exports = DimirCharm;
