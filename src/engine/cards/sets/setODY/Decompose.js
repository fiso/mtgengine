"use strict";
const Constants = require ("../../../Constants");
const DecomposeBase = require("../setDDK/Decompose");

class Decompose extends DecomposeBase {
  constructor (game) {
    super(game, "Decompose", "Odyssey", "ODY");
  }
}

module.exports = Decompose;
