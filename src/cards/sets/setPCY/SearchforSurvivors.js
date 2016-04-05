"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearchforSurvivors extends UnimplementedCard {
  constructor(game) {
    super(game, "Search for Survivors", "Prophecy", "PCY");
  }
}

module.exports = SearchforSurvivors;
