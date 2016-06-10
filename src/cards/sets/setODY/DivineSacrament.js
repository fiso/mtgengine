"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivineSacrament extends UnimplementedCard {
  constructor (game) {
    super(game, "Divine Sacrament", "Odyssey", "ODY");
  }
}

module.exports = DivineSacrament;
