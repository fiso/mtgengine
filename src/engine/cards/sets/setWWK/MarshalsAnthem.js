"use strict";
const Constants = require ("../../../Constants");
const MarshalsAnthemBase = require("../setC15/MarshalsAnthem");

class MarshalsAnthem extends MarshalsAnthemBase {
  constructor (game) {
    super(game, "Marshal's Anthem", "Worldwake", "WWK");
  }
}

module.exports = MarshalsAnthem;
