"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearchforTomorrow extends UnimplementedCard {
  constructor(game) {
    super(game, "Search for Tomorrow", "Modern Masters", "MMA");
  }
}

module.exports = SearchforTomorrow;
