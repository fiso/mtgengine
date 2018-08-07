"use strict";
const Constants = require ("../../../Constants");
const MoltenSlagheapBase = require("../setCMA/MoltenSlagheap");

class MoltenSlagheap extends MoltenSlagheapBase {
  constructor (game) {
    super(game, "Molten Slagheap", "Legendary Cube", "PZ1");
  }
}

module.exports = MoltenSlagheap;
