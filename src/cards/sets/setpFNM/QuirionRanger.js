"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuirionRanger extends UnimplementedCard {
  constructor (game) {
    super(game, "Quirion Ranger", "Friday Night Magic", "pFNM");
  }
}

module.exports = QuirionRanger;
