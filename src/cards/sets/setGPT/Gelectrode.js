"use strict";
const Constants = require ("../../../Constants");
const GelectrodeBase = require("../setDDJ/Gelectrode");

class Gelectrode extends GelectrodeBase {
  constructor (game) {
    super(game, "Gelectrode", "Guildpact", "GPT");
  }
}

module.exports = Gelectrode;
