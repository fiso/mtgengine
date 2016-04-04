"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GustcloakSaviorBase = require("../setDDO/GustcloakSavior.js");

class GustcloakSavior extends GustcloakSaviorBase {
  constructor(game) {
    super(game, "Gustcloak Savior", "Onslaught", "ONS");
  }
}

module.exports = GustcloakSavior;
