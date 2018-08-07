"use strict";
const Constants = require ("../../../Constants");
const DireFleetRavagerBase = require("../setXLN/DireFleetRavager");

class DireFleetRavager extends DireFleetRavagerBase {
  constructor (game) {
    super(game, "Dire Fleet Ravager", "Ixalan Promos", "PXLN");
  }
}

module.exports = DireFleetRavager;
