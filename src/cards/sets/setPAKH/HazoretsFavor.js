"use strict";
const Constants = require ("../../../Constants");
const HazoretsFavorBase = require("../setAKH/HazoretsFavor");

class HazoretsFavor extends HazoretsFavorBase {
  constructor (game) {
    super(game, "Hazoret's Favor", "Amonkhet Promos", "PAKH");
  }
}

module.exports = HazoretsFavor;
