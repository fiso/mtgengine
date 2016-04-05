"use strict";
const Constants = require ("../../../Constants");
const PrimeSpeakerZeganaBase = require("../setC15/PrimeSpeakerZegana");

class PrimeSpeakerZegana extends PrimeSpeakerZeganaBase {
  constructor(game) {
    super(game, "Prime Speaker Zegana", "Gatecrash", "GTC");
  }
}

module.exports = PrimeSpeakerZegana;
