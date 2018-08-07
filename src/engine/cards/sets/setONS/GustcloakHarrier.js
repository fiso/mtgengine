"use strict";
const Constants = require ("../../../Constants");
const GustcloakHarrierBase = require("../setDDO/GustcloakHarrier");

class GustcloakHarrier extends GustcloakHarrierBase {
  constructor (game) {
    super(game, "Gustcloak Harrier", "Onslaught", "ONS");
  }
}

module.exports = GustcloakHarrier;
