"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RageThrower extends UnimplementedCard {
  constructor (game) {
    super(game, "Rage Thrower", "Innistrad", "ISD");
  }
}

module.exports = RageThrower;
