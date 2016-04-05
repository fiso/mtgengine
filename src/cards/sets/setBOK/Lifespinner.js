"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lifespinner extends UnimplementedCard {
  constructor(game) {
    super(game, "Lifespinner", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Lifespinner;
