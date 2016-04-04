"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CastigateBase = require("../setpARL/Castigate.js");

class Castigate extends CastigateBase {
  constructor(game) {
    super(game, "Castigate", "Guildpact", "GPT");
  }
}

module.exports = Castigate;
