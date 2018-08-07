"use strict";
const Constants = require ("../../../Constants");
const NiblisofFrostBase = require("../setEMN/NiblisofFrost");

class NiblisofFrost extends NiblisofFrostBase {
  constructor (game) {
    super(game, "Niblis of Frost", "Magic Online Promos", "PRM");
  }
}

module.exports = NiblisofFrost;
