"use strict";
const Constants = require ("../../../Constants");
const DwarvenDemolitionTeamBase = require("../setCED/DwarvenDemolitionTeam");

class DwarvenDemolitionTeam extends DwarvenDemolitionTeamBase {
  constructor(game) {
    super(game, "Dwarven Demolition Team", "Eighth Edition", "8ED");
  }
}

module.exports = DwarvenDemolitionTeam;
