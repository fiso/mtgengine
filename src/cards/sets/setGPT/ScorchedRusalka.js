"use strict";
const Constants = require ("../../../Constants");
const ScorchedRusalkaBase = require("../setDDK/ScorchedRusalka");

class ScorchedRusalka extends ScorchedRusalkaBase {
  constructor (game) {
    super(game, "Scorched Rusalka", "Guildpact", "GPT");
  }
}

module.exports = ScorchedRusalka;
