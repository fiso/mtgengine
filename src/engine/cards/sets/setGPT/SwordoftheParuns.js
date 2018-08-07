"use strict";
const Constants = require ("../../../Constants");
const SwordoftheParunsBase = require("../setCMA/SwordoftheParuns");

class SwordoftheParuns extends SwordoftheParunsBase {
  constructor (game) {
    super(game, "Sword of the Paruns", "Guildpact", "GPT");
  }
}

module.exports = SwordoftheParuns;
