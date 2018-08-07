"use strict";
const Constants = require ("../../../Constants");
const GustcloakSentinelBase = require("../setDDO/GustcloakSentinel");

class GustcloakSentinel extends GustcloakSentinelBase {
  constructor (game) {
    super(game, "Gustcloak Sentinel", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = GustcloakSentinel;
