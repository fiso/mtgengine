"use strict";
const Constants = require ("../../../Constants");
const CircularLogicBase = require("../setpFNM/CircularLogic");

class CircularLogic extends CircularLogicBase {
  constructor (game) {
    super(game, "Circular Logic", "Vintage Masters", "VMA");
  }
}

module.exports = CircularLogic;
