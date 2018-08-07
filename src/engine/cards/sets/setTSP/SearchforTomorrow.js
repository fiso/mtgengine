"use strict";
const Constants = require ("../../../Constants");
const SearchforTomorrowBase = require("../setIMA/SearchforTomorrow");

class SearchforTomorrow extends SearchforTomorrowBase {
  constructor (game) {
    super(game, "Search for Tomorrow", "Time Spiral", "TSP");
  }
}

module.exports = SearchforTomorrow;
