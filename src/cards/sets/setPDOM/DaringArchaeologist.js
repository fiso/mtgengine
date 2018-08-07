"use strict";
const Constants = require ("../../../Constants");
const DaringArchaeologistBase = require("../setDOM/DaringArchaeologist");

class DaringArchaeologist extends DaringArchaeologistBase {
  constructor (game) {
    super(game, "Daring Archaeologist", "Dominaria Promos", "PDOM");
  }
}

module.exports = DaringArchaeologist;
