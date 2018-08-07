"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnlivingPsychopath extends UnimplementedCard {
  constructor (game) {
    super(game, "Unliving Psychopath", "Dissension", "DIS");
  }
}

module.exports = UnlivingPsychopath;
