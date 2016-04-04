"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SearchforSurvivors extends Card {
  constructor(game) {
    super(game, "Search for Survivors", "Prophecy", "PCY");
  }
}

module.exports = SearchforSurvivors;
