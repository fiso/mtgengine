"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExaltedAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Exalted Angel", "From the Vault: Angels", "V15");
  }
}

module.exports = ExaltedAngel;
