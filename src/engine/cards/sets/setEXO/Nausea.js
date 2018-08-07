"use strict";
const Constants = require ("../../../Constants");
const NauseaBase = require("../setEMA/Nausea");

class Nausea extends NauseaBase {
  constructor (game) {
    super(game, "Nausea", "Exodus", "EXO");
  }
}

module.exports = Nausea;
