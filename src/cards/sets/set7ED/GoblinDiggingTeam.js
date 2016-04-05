"use strict";
const Constants = require ("../../../Constants");
const GoblinDiggingTeamBase = require("../setATH/GoblinDiggingTeam");

class GoblinDiggingTeam extends GoblinDiggingTeamBase {
  constructor(game) {
    super(game, "Goblin Digging Team", "Seventh Edition", "7ED");
  }
}

module.exports = GoblinDiggingTeam;
