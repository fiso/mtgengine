"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hecatomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Hecatomb", "Masters Edition", "MED");
  }
}

module.exports = Hecatomb;
