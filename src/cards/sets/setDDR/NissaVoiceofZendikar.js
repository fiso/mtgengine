"use strict";
const Constants = require ("../../../Constants");
const NissaVoiceofZendikarBase = require("../setPS16/NissaVoiceofZendikar");

class NissaVoiceofZendikar extends NissaVoiceofZendikarBase {
  constructor (game) {
    super(game, "Nissa, Voice of Zendikar", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = NissaVoiceofZendikar;
