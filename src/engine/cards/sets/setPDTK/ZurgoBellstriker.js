"use strict";
const Constants = require ("../../../Constants");
const ZurgoBellstrikerBase = require("../setDTK/ZurgoBellstriker");

class ZurgoBellstriker extends ZurgoBellstrikerBase {
  constructor (game) {
    super(game, "Zurgo Bellstriker", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = ZurgoBellstriker;
