"use strict";
const Constants = require ("../../../Constants");
const CloakofMistsBase = require("../setGS1/CloakofMists");

class CloakofMists extends CloakofMistsBase {
  constructor (game) {
    super(game, "Cloak of Mists", "Urza's Saga", "USG");
  }
}

module.exports = CloakofMists;
