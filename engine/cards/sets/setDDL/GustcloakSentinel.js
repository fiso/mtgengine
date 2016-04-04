"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GustcloakSentinelBase = require("../setDDO/GustcloakSentinel.js");

class GustcloakSentinel extends GustcloakSentinelBase {
  constructor(game) {
    super(game, "Gustcloak Sentinel", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = GustcloakSentinel;
