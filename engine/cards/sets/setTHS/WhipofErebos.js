"use strict";
const Constants = require ("../../../Constants");
const WhipofErebosBase = require("../setCPK/WhipofErebos");

class WhipofErebos extends WhipofErebosBase {
  constructor(game) {
    super(game, "Whip of Erebos", "Theros", "THS");
  }
}

module.exports = WhipofErebos;
