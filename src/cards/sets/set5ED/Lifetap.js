"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lifetap extends UnimplementedCard {
  constructor (game) {
    super(game, "Lifetap", "Fifth Edition", "5ED");
  }
}

module.exports = Lifetap;
