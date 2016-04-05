"use strict";
const Constants = require ("../../../Constants");
const PalladiaMorsBase = require("../setCHR/PalladiaMors");

class PalladiaMors extends PalladiaMorsBase {
  constructor(game) {
    super(game, "Palladia-Mors", "Masters Edition III", "ME3");
  }
}

module.exports = PalladiaMors;
