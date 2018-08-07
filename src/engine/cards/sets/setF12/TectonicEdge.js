"use strict";
const Constants = require ("../../../Constants");
const TectonicEdgeBase = require("../setEXP/TectonicEdge");

class TectonicEdge extends TectonicEdgeBase {
  constructor (game) {
    super(game, "Tectonic Edge", "Friday Night Magic 2012", "F12");
  }
}

module.exports = TectonicEdge;
