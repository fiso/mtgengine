"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Firespout extends UnimplementedCard {
  constructor(game) {
    super(game, "Firespout", "From the Vault: Annihilation (2014)", "V14");
  }
}

module.exports = Firespout;
