"use strict";
const Constants = require ("../../../Constants");
const ThunderheadsBase = require("../setDDJ/Thunderheads");

class Thunderheads extends ThunderheadsBase {
  constructor(game) {
    super(game, "Thunderheads", "Guildpact", "GPT");
  }
}

module.exports = Thunderheads;
