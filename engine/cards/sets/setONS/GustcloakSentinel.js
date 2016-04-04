"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GustcloakSentinelBase = require("../setDDO/GustcloakSentinel.js");

class GustcloakSentinel extends GustcloakSentinelBase {
  constructor(game) {
    super(game, "Gustcloak Sentinel", "Onslaught", "ONS");
  }
}

module.exports = GustcloakSentinel;
