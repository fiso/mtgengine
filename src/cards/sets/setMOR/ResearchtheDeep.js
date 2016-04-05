"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResearchtheDeep extends UnimplementedCard {
  constructor(game) {
    super(game, "Research the Deep", "Morningtide", "MOR");
  }
}

module.exports = ResearchtheDeep;
