"use strict";
const Constants = require ("../../../Constants");
const MaulSplicerBase = require("../setNPH/MaulSplicer");

class MaulSplicer extends MaulSplicerBase {
  constructor(game) {
    super(game, "Maul Splicer", "WPN and Gateway", "pWPN");
  }
}

module.exports = MaulSplicer;
