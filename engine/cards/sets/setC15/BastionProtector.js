"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BastionProtector extends Card {
  constructor(game) {
    super(game, "Bastion Protector", "Commander 2015", "C15");
  }
}

module.exports = BastionProtector;
