"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IzzetChemister extends UnimplementedCard {
  constructor (game) {
    super(game, "Izzet Chemister", "Masters 25", "A25");
  }
}

module.exports = IzzetChemister;
