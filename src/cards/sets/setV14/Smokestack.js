"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Smokestack extends UnimplementedCard {
  constructor(game) {
    super(game, "Smokestack", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = Smokestack;
