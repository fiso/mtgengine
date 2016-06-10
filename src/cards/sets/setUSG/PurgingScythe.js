"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PurgingScythe extends UnimplementedCard {
  constructor (game) {
    super(game, "Purging Scythe", "Urza's Saga", "USG");
  }
}

module.exports = PurgingScythe;
