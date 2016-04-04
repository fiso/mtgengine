"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourtHussar extends UnimplementedCard {
  constructor(game) {
    super(game, "Court Hussar", "Dissension", "DIS");
  }
}

module.exports = CourtHussar;
