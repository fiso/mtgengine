"use strict";
const Constants = require ("../../../Constants");
const PrecognitionFieldBase = require("../setDOM/PrecognitionField");

class PrecognitionField extends PrecognitionFieldBase {
  constructor (game) {
    super(game, "Precognition Field", "Dominaria Promos", "PDOM");
  }
}

module.exports = PrecognitionField;
