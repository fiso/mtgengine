"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FirstVolley extends UnimplementedCard {
  constructor (game) {
    super(game, "First Volley", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FirstVolley;
