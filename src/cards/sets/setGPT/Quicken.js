"use strict";
const Constants = require ("../../../Constants");
const QuickenBase = require("../setDDS/Quicken");

class Quicken extends QuickenBase {
  constructor (game) {
    super(game, "Quicken", "Guildpact", "GPT");
  }
}

module.exports = Quicken;
