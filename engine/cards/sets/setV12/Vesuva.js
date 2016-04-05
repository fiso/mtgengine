"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vesuva extends UnimplementedCard {
  constructor(game) {
    super(game, "Vesuva", "From the Vault: Realms", "V12");
  }
}

module.exports = Vesuva;
