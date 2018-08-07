"use strict";
const Constants = require ("../../../Constants");
const AngrathsMaraudersBase = require("../setXLN/AngrathsMarauders");

class AngrathsMarauders extends AngrathsMaraudersBase {
  constructor (game) {
    super(game, "Angrath's Marauders", "Ixalan Promos", "PXLN");
  }
}

module.exports = AngrathsMarauders;
