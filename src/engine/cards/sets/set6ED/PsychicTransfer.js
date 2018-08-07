"use strict";
const Constants = require ("../../../Constants");
const PsychicTransferBase = require("../setS99/PsychicTransfer");

class PsychicTransfer extends PsychicTransferBase {
  constructor (game) {
    super(game, "Psychic Transfer", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PsychicTransfer;
