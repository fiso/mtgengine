"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenGuildInitiate extends UnimplementedCard {
  constructor(game) {
    super(game, "Raven Guild Initiate", "Scourge", "SCG");
  }
}

module.exports = RavenGuildInitiate;
