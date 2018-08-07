"use strict";
const Constants = require ("../../../Constants");
const GustcloakSkirmisherBase = require("../setDDO/GustcloakSkirmisher");

class GustcloakSkirmisher extends GustcloakSkirmisherBase {
  constructor (game) {
    super(game, "Gustcloak Skirmisher", "Onslaught", "ONS");
  }
}

module.exports = GustcloakSkirmisher;
