"use strict";
const Constants = require ("../../../Constants");
const BastionProtectorBase = require("../setPZ1/BastionProtector");

class BastionProtector extends BastionProtectorBase {
  constructor (game) {
    super(game, "Bastion Protector", "Commander 2015", "C15");
  }
}

module.exports = BastionProtector;
