"use strict";
const Constants = require ("../../../Constants");
const StormHerdBase = require("../setCMD/StormHerd");

class StormHerd extends StormHerdBase {
  constructor (game) {
    super(game, "Storm Herd", "Guildpact", "GPT");
  }
}

module.exports = StormHerd;
