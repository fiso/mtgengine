"use strict";
const Constants = require ("../../../Constants");
const GoblinDiggingTeamBase = require("../set7ED/GoblinDiggingTeam");

class GoblinDiggingTeam extends GoblinDiggingTeamBase {
  constructor (game) {
    super(game, "Goblin Digging Team", "Anthologies", "ATH");
  }
}

module.exports = GoblinDiggingTeam;
