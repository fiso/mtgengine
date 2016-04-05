"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrborgTombofYawgmoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Urborg, Tomb of Yawgmoth", "From the Vault: Realms", "V12");
  }
}

module.exports = UrborgTombofYawgmoth;
