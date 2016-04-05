"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenDemolitionTeam extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Demolition Team", "Collector's Edition", "CED");
  }
}

module.exports = DwarvenDemolitionTeam;
