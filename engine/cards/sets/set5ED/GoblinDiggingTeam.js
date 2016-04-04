"use strict";
const Constants = require ("../../../Constants");
const GoblinDiggingTeamBase = require("../setATH/GoblinDiggingTeam");

class GoblinDiggingTeam extends GoblinDiggingTeamBase {
  constructor(game) {
    super(game, "Goblin Digging Team", "Fifth Edition", "5ED");
  }
}

module.exports = GoblinDiggingTeam;
