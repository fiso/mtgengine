"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConclavesBlessing extends UnimplementedCard {
  constructor(game) {
    super(game, "Conclave's Blessing", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ConclavesBlessing;
