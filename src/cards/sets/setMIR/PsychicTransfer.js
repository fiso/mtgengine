"use strict";
const Constants = require ("../../../Constants");
const PsychicTransferBase = require("../set6ED/PsychicTransfer");

class PsychicTransfer extends PsychicTransferBase {
  constructor (game) {
    super(game, "Psychic Transfer", "Mirage", "MIR");
  }
}

module.exports = PsychicTransfer;
