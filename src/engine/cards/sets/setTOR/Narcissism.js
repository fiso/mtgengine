"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Narcissism extends UnimplementedCard {
  constructor (game) {
    super(game, "Narcissism", "Torment", "TOR");
  }
}

module.exports = Narcissism;
