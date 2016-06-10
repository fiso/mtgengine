"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolitaryConfinement extends UnimplementedCard {
  constructor (game) {
    super(game, "Solitary Confinement", "Judgment", "JUD");
  }
}

module.exports = SolitaryConfinement;
