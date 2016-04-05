"use strict";
const Constants = require ("../../../Constants");
const AtogBase = require("../setATQ/Atog");

class Atog extends AtogBase {
  constructor(game) {
    super(game, "Atog", "Masters Edition IV", "ME4");
  }
}

module.exports = Atog;
