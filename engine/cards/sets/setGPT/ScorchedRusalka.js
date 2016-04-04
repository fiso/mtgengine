"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScorchedRusalkaBase = require("../setDDK/ScorchedRusalka.js");

class ScorchedRusalka extends ScorchedRusalkaBase {
  constructor(game) {
    super(game, "Scorched Rusalka", "Guildpact", "GPT");
  }
}

module.exports = ScorchedRusalka;
