"use strict";
const Constants = require ("../../../Constants");
const MoltenSlagheapBase = require("../setC13/MoltenSlagheap");

class MoltenSlagheap extends MoltenSlagheapBase {
  constructor (game) {
    super(game, "Molten Slagheap", "Time Spiral", "TSP");
  }
}

module.exports = MoltenSlagheap;
