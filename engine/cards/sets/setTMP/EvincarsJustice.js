"use strict";
const Constants = require ("../../../Constants");
const EvincarsJusticeBase = require("../setCMD/EvincarsJustice");

class EvincarsJustice extends EvincarsJusticeBase {
  constructor(game) {
    super(game, "Evincar's Justice", "Tempest", "TMP");
  }
}

module.exports = EvincarsJustice;
