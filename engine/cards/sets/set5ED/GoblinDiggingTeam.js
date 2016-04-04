"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinDiggingTeamBase = require("../setATH/GoblinDiggingTeam.js");

class GoblinDiggingTeam extends GoblinDiggingTeamBase {
  constructor(game) {
    super(game, "Goblin Digging Team", "Fifth Edition", "5ED");
  }
}

module.exports = GoblinDiggingTeam;
