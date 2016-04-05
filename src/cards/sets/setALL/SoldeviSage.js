"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldeviSage extends UnimplementedCard {
  constructor(game) {
    super(game, "Soldevi Sage", "Alliances", "ALL");
  }
}

module.exports = SoldeviSage;
