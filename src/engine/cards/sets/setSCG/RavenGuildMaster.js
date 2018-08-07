"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenGuildMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Raven Guild Master", "Scourge", "SCG");
  }
}

module.exports = RavenGuildMaster;
