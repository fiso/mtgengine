"use strict";
const Constants = require ("../../../Constants");
const AngelofDespairBase = require("../setCMA/AngelofDespair");

class AngelofDespair extends AngelofDespairBase {
  constructor (game) {
    super(game, "Angel of Despair", "Guildpact", "GPT");
  }
}

module.exports = AngelofDespair;
