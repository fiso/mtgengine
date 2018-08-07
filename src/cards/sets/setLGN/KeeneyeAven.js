"use strict";
const Constants = require ("../../../Constants");
const KeeneyeAvenBase = require("../setVMA/KeeneyeAven");

class KeeneyeAven extends KeeneyeAvenBase {
  constructor (game) {
    super(game, "Keeneye Aven", "Legions", "LGN");
  }
}

module.exports = KeeneyeAven;
