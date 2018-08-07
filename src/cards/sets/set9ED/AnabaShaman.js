"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnabaShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Anaba Shaman", "Ninth Edition", "9ED");
  }
}

module.exports = AnabaShaman;
