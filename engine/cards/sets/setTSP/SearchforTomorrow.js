"use strict";
const Constants = require ("../../../Constants");
const SearchforTomorrowBase = require("../setMMA/SearchforTomorrow");

class SearchforTomorrow extends SearchforTomorrowBase {
  constructor(game) {
    super(game, "Search for Tomorrow", "Time Spiral", "TSP");
  }
}

module.exports = SearchforTomorrow;
