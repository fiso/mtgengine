"use strict";
const Constants = require ("../../../Constants");
const PlagueBelcherBase = require("../setAKH/PlagueBelcher");

class PlagueBelcher extends PlagueBelcherBase {
  constructor (game) {
    super(game, "Plague Belcher", "Amonkhet Promos", "PAKH");
  }
}

module.exports = PlagueBelcher;
