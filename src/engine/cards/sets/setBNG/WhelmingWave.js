"use strict";
const Constants = require ("../../../Constants");
const WhelmingWaveBase = require("../setDDO/WhelmingWave");

class WhelmingWave extends WhelmingWaveBase {
  constructor (game) {
    super(game, "Whelming Wave", "Born of the Gods", "BNG");
  }
}

module.exports = WhelmingWave;
