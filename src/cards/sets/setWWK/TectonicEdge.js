"use strict";
const Constants = require ("../../../Constants");
const TectonicEdgeBase = require("../setEXP/TectonicEdge");

class TectonicEdge extends TectonicEdgeBase {
  constructor (game) {
    super(game, "Tectonic Edge", "Worldwake", "WWK");
  }
}

module.exports = TectonicEdge;
