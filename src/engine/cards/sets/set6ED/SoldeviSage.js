"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldeviSage extends UnimplementedCard {
  constructor (game) {
    super(game, "Soldevi Sage", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SoldeviSage;
