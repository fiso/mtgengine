"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DwarvenDemolitionTeamBase = require("../setCED/DwarvenDemolitionTeam.js");

class DwarvenDemolitionTeam extends DwarvenDemolitionTeamBase {
  constructor(game) {
    super(game, "Dwarven Demolition Team", "Unlimited Edition", "2ED");
  }
}

module.exports = DwarvenDemolitionTeam;
