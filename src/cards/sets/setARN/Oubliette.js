"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oubliette extends UnimplementedCard {
  constructor (game) {
    super(game, "Oubliette", "Arabian Nights", "ARN");
  }
}

module.exports = Oubliette;
