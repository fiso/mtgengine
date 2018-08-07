"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JovensFerrets extends UnimplementedCard {
  constructor (game) {
    super(game, "Joven's Ferrets", "Masters Edition II", "ME2");
  }
}

module.exports = JovensFerrets;
