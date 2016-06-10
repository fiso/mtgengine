"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Propaganda extends UnimplementedCard {
  constructor (game) {
    super(game, "Propaganda", "Commander 2013 Edition", "C13");
  }
}

module.exports = Propaganda;
