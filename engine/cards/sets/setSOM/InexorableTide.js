"use strict";
const Constants = require ("../../../Constants");
const InexorableTideBase = require("../setMM2/InexorableTide");

class InexorableTide extends InexorableTideBase {
  constructor(game) {
    super(game, "Inexorable Tide", "Scars of Mirrodin", "SOM");
  }
}

module.exports = InexorableTide;
