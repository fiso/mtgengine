"use strict";
const Constants = require ("../../../Constants");
const SavannahBase = require("../setCED/Savannah");

class Savannah extends SavannahBase {
  constructor(game) {
    super(game, "Savannah", "Masters Edition IV", "ME4");
  }
}

module.exports = Savannah;
