"use strict";
const Constants = require ("../../../Constants");
const WindsofChangeBase = require("../setMED/WindsofChange");

class WindsofChange extends WindsofChangeBase {
  constructor (game) {
    super(game, "Winds of Change", "Portal", "POR");
  }
}

module.exports = WindsofChange;
