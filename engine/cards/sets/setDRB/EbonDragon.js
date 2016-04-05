"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EbonDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Ebon Dragon", "From the Vault: Dragons", "DRB");
  }
}

module.exports = EbonDragon;
