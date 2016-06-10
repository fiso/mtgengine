"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lifetap extends UnimplementedCard {
  constructor (game) {
    super(game, "Lifetap", "Collector's Edition", "CED");
  }
}

module.exports = Lifetap;
