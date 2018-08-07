"use strict";
const Constants = require ("../../../Constants");
const EldraziDisplacerBase = require("../setOGW/EldraziDisplacer");

class EldraziDisplacer extends EldraziDisplacerBase {
  constructor (game) {
    super(game, "Eldrazi Displacer", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = EldraziDisplacer;
