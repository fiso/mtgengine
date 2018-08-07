"use strict";
const Constants = require ("../../../Constants");
const TectonicEdgeBase = require("../setEXP/TectonicEdge");

class TectonicEdge extends TectonicEdgeBase {
  constructor (game) {
    super(game, "Tectonic Edge", "Commander 2014", "C14");
  }
}

module.exports = TectonicEdge;
