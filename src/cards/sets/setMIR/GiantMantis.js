"use strict";
const Constants = require ("../../../Constants");
const GiantMantisBase = require("../setBFZ/GiantMantis");

class GiantMantis extends GiantMantisBase {
  constructor(game) {
    super(game, "Giant Mantis", "Mirage", "MIR");
  }
}

module.exports = GiantMantis;
