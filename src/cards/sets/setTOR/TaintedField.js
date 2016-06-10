"use strict";
const Constants = require ("../../../Constants");
const TaintedFieldBase = require("../setC15/TaintedField");

class TaintedField extends TaintedFieldBase {
  constructor (game) {
    super(game, "Tainted Field", "Torment", "TOR");
  }
}

module.exports = TaintedField;
