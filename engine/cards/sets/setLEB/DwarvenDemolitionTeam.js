"use strict";
const Constants = require ("../../../Constants");
const DwarvenDemolitionTeamBase = require("../setCED/DwarvenDemolitionTeam");

class DwarvenDemolitionTeam extends DwarvenDemolitionTeamBase {
  constructor(game) {
    super(game, "Dwarven Demolition Team", "Limited Edition Beta", "LEB");
  }
}

module.exports = DwarvenDemolitionTeam;
