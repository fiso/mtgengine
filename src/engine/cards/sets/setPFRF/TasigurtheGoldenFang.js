"use strict";
const Constants = require ("../../../Constants");
const TasigurtheGoldenFangBase = require("../setFRF/TasigurtheGoldenFang");

class TasigurtheGoldenFang extends TasigurtheGoldenFangBase {
  constructor (game) {
    super(game, "Tasigur, the Golden Fang", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = TasigurtheGoldenFang;
