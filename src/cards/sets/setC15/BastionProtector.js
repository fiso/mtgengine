"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BastionProtector extends UnimplementedCard {
  constructor (game) {
    super(game, "Bastion Protector", "Commander 2015", "C15");
  }
}

module.exports = BastionProtector;
