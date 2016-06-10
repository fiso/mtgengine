"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldeviHeretic extends UnimplementedCard {
  constructor (game) {
    super(game, "Soldevi Heretic", "Alliances", "ALL");
  }
}

module.exports = SoldeviHeretic;
