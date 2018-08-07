"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InsultInjury extends UnimplementedCard {
  constructor (game) {
    super(game, "Insult // Injury", "Amonkhet", "AKH");
  }
}

module.exports = InsultInjury;
