"use strict";
const Constants = require ("../../../Constants");
const TectonicEdgeBase = require("../setC14/TectonicEdge");

class TectonicEdge extends TectonicEdgeBase {
  constructor (game) {
    super(game, "Tectonic Edge", "Friday Night Magic", "pFNM");
  }
}

module.exports = TectonicEdge;
