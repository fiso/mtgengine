"use strict";
const Constants = require ("../../../Constants");
const VoiceofAllBase = require("../setCMD/VoiceofAll");

class VoiceofAll extends VoiceofAllBase {
  constructor(game) {
    super(game, "Voice of All", "Tenth Edition", "10E");
  }
}

module.exports = VoiceofAll;
