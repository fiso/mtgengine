"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GideonsIntervention extends UnimplementedCard {
  constructor (game) {
    super(game, "Gideon's Intervention", "Amonkhet", "AKH");
  }
}

module.exports = GideonsIntervention;
