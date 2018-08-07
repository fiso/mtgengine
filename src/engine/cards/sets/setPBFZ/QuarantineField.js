"use strict";
const Constants = require ("../../../Constants");
const QuarantineFieldBase = require("../setBFZ/QuarantineField");

class QuarantineField extends QuarantineFieldBase {
  constructor (game) {
    super(game, "Quarantine Field", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = QuarantineField;
