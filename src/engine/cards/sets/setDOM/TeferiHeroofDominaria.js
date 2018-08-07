"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferiHeroofDominaria extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi, Hero of Dominaria", "Dominaria", "DOM");
  }
}

module.exports = TeferiHeroofDominaria;
