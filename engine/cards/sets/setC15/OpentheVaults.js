"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OpentheVaults extends Card {
  constructor(game) {
    super(game, "Open the Vaults", "Commander 2015", "C15");
  }
}

module.exports = OpentheVaults;
