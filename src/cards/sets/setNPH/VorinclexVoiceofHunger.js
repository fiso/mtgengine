"use strict";
const Constants = require ("../../../Constants");
const VorinclexVoiceofHungerBase = require("../setIMA/VorinclexVoiceofHunger");

class VorinclexVoiceofHunger extends VorinclexVoiceofHungerBase {
  constructor (game) {
    super(game, "Vorinclex, Voice of Hunger", "New Phyrexia", "NPH");
  }
}

module.exports = VorinclexVoiceofHunger;
