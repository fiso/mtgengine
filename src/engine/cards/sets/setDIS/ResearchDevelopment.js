"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResearchDevelopment extends UnimplementedCard {
  constructor (game) {
    super(game, "Research // Development", "Dissension", "DIS");
  }
}

module.exports = ResearchDevelopment;
