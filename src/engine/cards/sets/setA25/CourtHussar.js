"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourtHussar extends UnimplementedCard {
  constructor (game) {
    super(game, "Court Hussar", "Masters 25", "A25");
  }
}

module.exports = CourtHussar;
