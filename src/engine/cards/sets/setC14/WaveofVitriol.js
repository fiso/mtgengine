"use strict";
const Constants = require ("../../../Constants");
const WaveofVitriolBase = require("../setCMA/WaveofVitriol");

class WaveofVitriol extends WaveofVitriolBase {
  constructor (game) {
    super(game, "Wave of Vitriol", "Commander 2014", "C14");
  }
}

module.exports = WaveofVitriol;
