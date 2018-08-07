"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EateroftheDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Eater of the Dead", "Masters Edition", "MED");
  }
}

module.exports = EateroftheDead;
