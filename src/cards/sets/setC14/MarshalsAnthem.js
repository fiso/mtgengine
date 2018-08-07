"use strict";
const Constants = require ("../../../Constants");
const MarshalsAnthemBase = require("../setC15/MarshalsAnthem");

class MarshalsAnthem extends MarshalsAnthemBase {
  constructor (game) {
    super(game, "Marshal's Anthem", "Commander 2014", "C14");
  }
}

module.exports = MarshalsAnthem;
