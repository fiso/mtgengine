"use strict";
const Constants = require ("../../../Constants");
const WeeDragonautsBase = require("../setEMA/WeeDragonauts");

class WeeDragonauts extends WeeDragonautsBase {
  constructor (game) {
    super(game, "Wee Dragonauts", "Guildpact", "GPT");
  }
}

module.exports = WeeDragonauts;
