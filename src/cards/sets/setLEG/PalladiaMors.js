"use strict";
const Constants = require ("../../../Constants");
const PalladiaMorsBase = require("../setCHR/PalladiaMors");

class PalladiaMors extends PalladiaMorsBase {
  constructor(game) {
    super(game, "Palladia-Mors", "Legends", "LEG");
  }
}

module.exports = PalladiaMors;
