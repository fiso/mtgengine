"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tinker extends UnimplementedCard {
  constructor(game) {
    super(game, "Tinker", "From the Vault: Exiled", "V09");
  }
}

module.exports = Tinker;
