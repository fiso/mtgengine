"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TaintedFieldBase = require("../setC15/TaintedField.js");

class TaintedField extends TaintedFieldBase {
  constructor(game) {
    super(game, "Tainted Field", "Torment", "TOR");
  }
}

module.exports = TaintedField;
