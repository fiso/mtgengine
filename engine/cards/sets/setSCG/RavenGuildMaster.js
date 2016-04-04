"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RavenGuildMaster extends Card {
  constructor(game) {
    super(game, "Raven Guild Master", "Scourge", "SCG");
  }
}

module.exports = RavenGuildMaster;
