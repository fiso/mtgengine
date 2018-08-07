"use strict";
const Constants = require ("../../../Constants");
const DwarvenDemolitionTeamBase = require("../set8ED/DwarvenDemolitionTeam");

class DwarvenDemolitionTeam extends DwarvenDemolitionTeamBase {
  constructor (game) {
    super(game, "Dwarven Demolition Team", "Unlimited Edition", "2ED");
  }
}

module.exports = DwarvenDemolitionTeam;
