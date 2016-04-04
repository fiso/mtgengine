"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GustcloakHarrierBase = require("../setDDO/GustcloakHarrier.js");

class GustcloakHarrier extends GustcloakHarrierBase {
  constructor(game) {
    super(game, "Gustcloak Harrier", "Vintage Masters", "VMA");
  }
}

module.exports = GustcloakHarrier;
