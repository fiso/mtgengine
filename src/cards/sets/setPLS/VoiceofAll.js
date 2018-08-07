"use strict";
const Constants = require ("../../../Constants");
const VoiceofAllBase = require("../setCMA/VoiceofAll");

class VoiceofAll extends VoiceofAllBase {
  constructor (game) {
    super(game, "Voice of All", "Planeshift", "PLS");
  }
}

module.exports = VoiceofAll;
