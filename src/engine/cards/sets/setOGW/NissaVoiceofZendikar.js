"use strict";
const Constants = require ("../../../Constants");
const NissaVoiceofZendikarBase = require("../setPS16/NissaVoiceofZendikar");

class NissaVoiceofZendikar extends NissaVoiceofZendikarBase {
  constructor (game) {
    super(game, "Nissa, Voice of Zendikar", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = NissaVoiceofZendikar;
