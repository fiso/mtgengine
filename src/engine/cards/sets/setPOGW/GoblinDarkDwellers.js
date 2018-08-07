"use strict";
const Constants = require ("../../../Constants");
const GoblinDarkDwellersBase = require("../setOGW/GoblinDarkDwellers");

class GoblinDarkDwellers extends GoblinDarkDwellersBase {
  constructor (game) {
    super(game, "Goblin Dark-Dwellers", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = GoblinDarkDwellers;
