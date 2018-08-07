"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BastionProtector extends UnimplementedCard {
  constructor (game) {
    super(game, "Bastion Protector", "Legendary Cube", "PZ1");
  }
}

module.exports = BastionProtector;
