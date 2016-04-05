"use strict";
const Constants = require ("../../../Constants");
const SavannahBase = require("../setCED/Savannah");

class Savannah extends SavannahBase {
  constructor(game) {
    super(game, "Savannah", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Savannah;
