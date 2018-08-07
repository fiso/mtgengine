"use strict";
const Constants = require ("../../../Constants");
const StonySilenceBase = require("../setMM3/StonySilence");

class StonySilence extends StonySilenceBase {
  constructor (game) {
    super(game, "Stony Silence", "Innistrad", "ISD");
  }
}

module.exports = StonySilence;
