"use strict";
const Constants = require ("../../../Constants");
const MoltenSlagheapBase = require("../setCMA/MoltenSlagheap");

class MoltenSlagheap extends MoltenSlagheapBase {
  constructor (game) {
    super(game, "Molten Slagheap", "Commander 2013", "C13");
  }
}

module.exports = MoltenSlagheap;
