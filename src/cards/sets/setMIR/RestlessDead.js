"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RestlessDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Restless Dead", "Mirage", "MIR");
  }
}

module.exports = RestlessDead;
