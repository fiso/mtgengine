"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldeviDigger extends UnimplementedCard {
  constructor (game) {
    super(game, "Soldevi Digger", "Alliances", "ALL");
  }
}

module.exports = SoldeviDigger;
