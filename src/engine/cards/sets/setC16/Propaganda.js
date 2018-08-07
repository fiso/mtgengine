"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Propaganda extends UnimplementedCard {
  constructor (game) {
    super(game, "Propaganda", "Commander 2016", "C16");
  }
}

module.exports = Propaganda;
