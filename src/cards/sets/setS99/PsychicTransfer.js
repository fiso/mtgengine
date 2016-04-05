"use strict";
const Constants = require ("../../../Constants");
const PsychicTransferBase = require("../set6ED/PsychicTransfer");

class PsychicTransfer extends PsychicTransferBase {
  constructor(game) {
    super(game, "Psychic Transfer", "Starter 1999", "S99");
  }
}

module.exports = PsychicTransfer;
