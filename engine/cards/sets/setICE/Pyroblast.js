"use strict";
const Constants = require ("../../../Constants");
const PyroblastBase = require("../set5ED/Pyroblast");

class Pyroblast extends PyroblastBase {
  constructor(game) {
    super(game, "Pyroblast", "Ice Age", "ICE");
  }
}

module.exports = Pyroblast;
