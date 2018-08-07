"use strict";
const Constants = require ("../../../Constants");
const BoltwingMarauderBase = require("../setDTK/BoltwingMarauder");

class BoltwingMarauder extends BoltwingMarauderBase {
  constructor (game) {
    super(game, "Boltwing Marauder", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = BoltwingMarauder;
