"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Smokestack extends UnimplementedCard {
  constructor (game) {
    super(game, "Smokestack", "From the Vault: Annihilation", "V14");
  }
}

module.exports = Smokestack;
