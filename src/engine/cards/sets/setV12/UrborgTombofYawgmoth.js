"use strict";
const Constants = require ("../../../Constants");
const UrborgTombofYawgmothBase = require("../setM15/UrborgTombofYawgmoth");

class UrborgTombofYawgmoth extends UrborgTombofYawgmothBase {
  constructor (game) {
    super(game, "Urborg, Tomb of Yawgmoth", "From the Vault: Realms", "V12");
  }
}

module.exports = UrborgTombofYawgmoth;
