"use strict";
const Constants = require ("../../../Constants");
const CastigateBase = require("../setpARL/Castigate");

class Castigate extends CastigateBase {
  constructor(game) {
    super(game, "Castigate", "Guildpact", "GPT");
  }
}

module.exports = Castigate;
