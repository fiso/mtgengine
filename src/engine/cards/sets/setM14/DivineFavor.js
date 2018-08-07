"use strict";
const Constants = require ("../../../Constants");
const DivineFavorBase = require("../setM15/DivineFavor");

class DivineFavor extends DivineFavorBase {
  constructor (game) {
    super(game, "Divine Favor", "Magic 2014", "M14");
  }
}

module.exports = DivineFavor;
