"use strict";
const Constants = require ("../../../Constants");
const VeteransReflexesBase = require("../setE02/VeteransReflexes");

class VeteransReflexes extends VeteransReflexesBase {
  constructor (game) {
    super(game, "Veteran's Reflexes", "Worldwake", "WWK");
  }
}

module.exports = VeteransReflexes;
