"use strict";
const Constants = require ("../../../Constants");
const MoxOpalBase = require("../setMM2/MoxOpal");

class MoxOpal extends MoxOpalBase {
  constructor(game) {
    super(game, "Mox Opal", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MoxOpal;
