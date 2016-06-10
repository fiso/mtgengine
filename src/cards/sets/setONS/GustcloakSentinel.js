"use strict";
const Constants = require ("../../../Constants");
const GustcloakSentinelBase = require("../setDDO/GustcloakSentinel");

class GustcloakSentinel extends GustcloakSentinelBase {
  constructor (game) {
    super(game, "Gustcloak Sentinel", "Onslaught", "ONS");
  }
}

module.exports = GustcloakSentinel;
