"use strict";
const Constants = require ("../../../Constants");
const GoblinDiggingTeamBase = require("../setATH/GoblinDiggingTeam");

class GoblinDiggingTeam extends GoblinDiggingTeamBase {
  constructor(game) {
    super(game, "Goblin Digging Team", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GoblinDiggingTeam;
