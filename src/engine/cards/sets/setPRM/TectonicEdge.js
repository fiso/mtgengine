"use strict";
const Constants = require ("../../../Constants");
const TectonicEdgeBase = require("../setEXP/TectonicEdge");

class TectonicEdge extends TectonicEdgeBase {
  constructor (game) {
    super(game, "Tectonic Edge", "Magic Online Promos", "PRM");
  }
}

module.exports = TectonicEdge;
