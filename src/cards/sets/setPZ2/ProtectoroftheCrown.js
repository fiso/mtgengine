"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProtectoroftheCrown extends UnimplementedCard {
  constructor (game) {
    super(game, "Protector of the Crown", "You Make the Cube", "PZ2");
  }
}

module.exports = ProtectoroftheCrown;
