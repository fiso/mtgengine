"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MatcaRioters extends UnimplementedCard {
  constructor(game) {
    super(game, "Matca Rioters", "Conflux", "CON");
  }
}

module.exports = MatcaRioters;
