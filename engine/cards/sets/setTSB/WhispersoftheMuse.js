"use strict";
const Constants = require ("../../../Constants");
const WhispersoftheMuseBase = require("../setTMP/WhispersoftheMuse");

class WhispersoftheMuse extends WhispersoftheMuseBase {
  constructor(game) {
    super(game, "Whispers of the Muse", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = WhispersoftheMuse;
