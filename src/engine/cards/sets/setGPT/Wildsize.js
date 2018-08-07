"use strict";
const Constants = require ("../../../Constants");
const WildsizeBase = require("../setIMA/Wildsize");

class Wildsize extends WildsizeBase {
  constructor (game) {
    super(game, "Wildsize", "Guildpact", "GPT");
  }
}

module.exports = Wildsize;
