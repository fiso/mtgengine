"use strict";
const Constants = require ("../../../Constants");
const PristineSkywiseBase = require("../setDTK/PristineSkywise");

class PristineSkywise extends PristineSkywiseBase {
  constructor (game) {
    super(game, "Pristine Skywise", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = PristineSkywise;
