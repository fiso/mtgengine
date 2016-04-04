"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PsychicTransferBase = require("../set6ED/PsychicTransfer.js");

class PsychicTransfer extends PsychicTransferBase {
  constructor(game) {
    super(game, "Psychic Transfer", "Starter 1999", "S99");
  }
}

module.exports = PsychicTransfer;
