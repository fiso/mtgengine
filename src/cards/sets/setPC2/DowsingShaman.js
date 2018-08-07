"use strict";
const Constants = require ("../../../Constants");
const DowsingShamanBase = require("../setPCA/DowsingShaman");

class DowsingShaman extends DowsingShamanBase {
  constructor (game) {
    super(game, "Dowsing Shaman", "Planechase 2012", "PC2");
  }
}

module.exports = DowsingShaman;
