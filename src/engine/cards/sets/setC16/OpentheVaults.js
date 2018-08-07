"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpentheVaults extends UnimplementedCard {
  constructor (game) {
    super(game, "Open the Vaults", "Commander 2016", "C16");
  }
}

module.exports = OpentheVaults;
