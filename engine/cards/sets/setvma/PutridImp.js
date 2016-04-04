"use strict";
const Constants = require ("../../../Constants");
const PutridImpBase = require("../setPD3/PutridImp");

class PutridImp extends PutridImpBase {
  constructor(game) {
    super(game, "Putrid Imp", "Vintage Masters", "VMA");
  }
}

module.exports = PutridImp;
