"use strict";
const Constants = require ("../../../Constants");
const AtogBase = require("../setATQ/Atog");

class Atog extends AtogBase {
  constructor (game) {
    super(game, "Atog", "Mirrodin", "MRD");
  }
}

module.exports = Atog;
