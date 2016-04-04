"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SearchforTomorrowBase = require("../setMMA/SearchforTomorrow.js");

class SearchforTomorrow extends SearchforTomorrowBase {
  constructor(game) {
    super(game, "Search for Tomorrow", "Planechase", "HOP");
  }
}

module.exports = SearchforTomorrow;
