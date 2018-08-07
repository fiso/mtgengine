"use strict";
const Constants = require ("../../../Constants");
const UrzasRuinousBlastBase = require("../setDOM/UrzasRuinousBlast");

class UrzasRuinousBlast extends UrzasRuinousBlastBase {
  constructor (game) {
    super(game, "Urza's Ruinous Blast", "Dominaria Promos", "PDOM");
  }
}

module.exports = UrzasRuinousBlast;
