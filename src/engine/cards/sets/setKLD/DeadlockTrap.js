"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadlockTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadlock Trap", "Kaladesh", "KLD");
  }
}

module.exports = DeadlockTrap;
