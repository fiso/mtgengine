"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lifegift extends UnimplementedCard {
  constructor (game) {
    super(game, "Lifegift", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Lifegift;
