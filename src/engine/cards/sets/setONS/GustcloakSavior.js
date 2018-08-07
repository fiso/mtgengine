"use strict";
const Constants = require ("../../../Constants");
const GustcloakSaviorBase = require("../setDDO/GustcloakSavior");

class GustcloakSavior extends GustcloakSaviorBase {
  constructor (game) {
    super(game, "Gustcloak Savior", "Onslaught", "ONS");
  }
}

module.exports = GustcloakSavior;
