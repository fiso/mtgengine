"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SearchforTomorrow extends Card {
  constructor(game) {
    super(game, "Search for Tomorrow", "Modern Masters", "MMA");
  }
}

module.exports = SearchforTomorrow;
