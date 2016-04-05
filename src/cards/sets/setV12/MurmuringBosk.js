"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurmuringBosk extends UnimplementedCard {
  constructor(game) {
    super(game, "Murmuring Bosk", "From the Vault: Realms", "V12");
  }
}

module.exports = MurmuringBosk;
