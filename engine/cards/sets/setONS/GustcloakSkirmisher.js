"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GustcloakSkirmisherBase = require("../setDDO/GustcloakSkirmisher.js");

class GustcloakSkirmisher extends GustcloakSkirmisherBase {
  constructor(game) {
    super(game, "Gustcloak Skirmisher", "Onslaught", "ONS");
  }
}

module.exports = GustcloakSkirmisher;
