"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseLunge extends UnimplementedCard {
  constructor(game) {
    super(game, "Corpse Lunge", "Innistrad", "ISD");
  }
}

module.exports = CorpseLunge;
