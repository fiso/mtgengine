"use strict";
const Constants = require ("../../../Constants");
const DreadShadeBase = require("../setDOM/DreadShade");

class DreadShade extends DreadShadeBase {
  constructor (game) {
    super(game, "Dread Shade", "Dominaria Promos", "PDOM");
  }
}

module.exports = DreadShade;
