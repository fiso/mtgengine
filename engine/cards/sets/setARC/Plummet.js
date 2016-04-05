"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plummet extends UnimplementedCard {
  constructor(game) {
    super(game, "Plummet", "Archenemy", "ARC");
  }
}

module.exports = Plummet;
