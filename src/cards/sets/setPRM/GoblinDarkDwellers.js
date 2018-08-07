"use strict";
const Constants = require ("../../../Constants");
const GoblinDarkDwellersBase = require("../setOGW/GoblinDarkDwellers");

class GoblinDarkDwellers extends GoblinDarkDwellersBase {
  constructor (game) {
    super(game, "Goblin Dark-Dwellers", "Magic Online Promos", "PRM");
  }
}

module.exports = GoblinDarkDwellers;
