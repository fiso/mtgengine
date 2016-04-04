"use strict";
const Constants = require ("../../../Constants");
const GwendlynDiCorciBase = require("../setLEG/GwendlynDiCorci");

class GwendlynDiCorci extends GwendlynDiCorciBase {
  constructor(game) {
    super(game, "Gwendlyn Di Corci", "Masters Edition III", "ME3");
  }
}

module.exports = GwendlynDiCorci;
