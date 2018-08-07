"use strict";
const Constants = require ("../../../Constants");
const ThundersongTrumpeterBase = require("../setMM3/ThundersongTrumpeter");

class ThundersongTrumpeter extends ThundersongTrumpeterBase {
  constructor (game) {
    super(game, "Thundersong Trumpeter", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ThundersongTrumpeter;
