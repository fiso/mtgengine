"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelicRunner extends UnimplementedCard {
  constructor (game) {
    super(game, "Relic Runner", "Dominaria", "DOM");
  }
}

module.exports = RelicRunner;
