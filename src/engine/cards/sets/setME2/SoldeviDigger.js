"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldeviDigger extends UnimplementedCard {
  constructor (game) {
    super(game, "Soldevi Digger", "Masters Edition II", "ME2");
  }
}

module.exports = SoldeviDigger;
