"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Oubliette extends UnimplementedCard {
  constructor (game) {
    super(game, "Oubliette", "Masters Edition", "MED");
  }
}

module.exports = Oubliette;
