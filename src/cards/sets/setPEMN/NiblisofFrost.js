"use strict";
const Constants = require ("../../../Constants");
const NiblisofFrostBase = require("../setEMN/NiblisofFrost");

class NiblisofFrost extends NiblisofFrostBase {
  constructor (game) {
    super(game, "Niblis of Frost", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = NiblisofFrost;
