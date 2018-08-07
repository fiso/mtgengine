"use strict";
const Constants = require ("../../../Constants");
const TishanaVoiceofThunderBase = require("../setXLN/TishanaVoiceofThunder");

class TishanaVoiceofThunder extends TishanaVoiceofThunderBase {
  constructor (game) {
    super(game, "Tishana, Voice of Thunder", "Ixalan Promos", "PXLN");
  }
}

module.exports = TishanaVoiceofThunder;
