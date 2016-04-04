"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoltenSlagheapBase = require("../setC13/MoltenSlagheap.js");

class MoltenSlagheap extends MoltenSlagheapBase {
  constructor(game) {
    super(game, "Molten Slagheap", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MoltenSlagheap;
