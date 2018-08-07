"use strict";
const Constants = require ("../../../Constants");
const ScabClanBerserkerBase = require("../setPORI/ScabClanBerserker");

class ScabClanBerserker extends ScabClanBerserkerBase {
  constructor (game) {
    super(game, "Scab-Clan Berserker", "Magic Origins", "ORI");
  }
}

module.exports = ScabClanBerserker;
