"use strict";
const Constants = require ("../../../Constants");
const GoblinDiggingTeamBase = require("../setATH/GoblinDiggingTeam");

class GoblinDiggingTeam extends GoblinDiggingTeamBase {
  constructor(game) {
    super(game, "Goblin Digging Team", "The Dark", "DRK");
  }
}

module.exports = GoblinDiggingTeam;
