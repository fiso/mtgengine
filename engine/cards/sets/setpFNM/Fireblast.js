"use strict";
const Constants = require ("../../../Constants");
const FireblastBase = require("../setDD3_JVC/Fireblast");

class Fireblast extends FireblastBase {
  constructor(game) {
    super(game, "Fireblast", "Friday Night Magic", "pFNM");
  }
}

module.exports = Fireblast;
