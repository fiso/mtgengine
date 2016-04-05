"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientTomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancient Tomb", "From the Vault: Realms", "V12");
  }
}

module.exports = AncientTomb;
