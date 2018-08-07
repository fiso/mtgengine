"use strict";
const Constants = require ("../../../Constants");
const ThaliaHereticCatharBase = require("../setEMN/ThaliaHereticCathar");

class ThaliaHereticCathar extends ThaliaHereticCatharBase {
  constructor (game) {
    super(game, "Thalia, Heretic Cathar", "Magic Online Promos", "PRM");
  }
}

module.exports = ThaliaHereticCathar;
