"use strict";
const Constants = require ("../../../Constants");
const TrollAsceticBase = require("../setCM2/TrollAscetic");

class TrollAscetic extends TrollAsceticBase {
  constructor (game) {
    super(game, "Troll Ascetic", "Tenth Edition", "10E");
  }
}

module.exports = TrollAscetic;
