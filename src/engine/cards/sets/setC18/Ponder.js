"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ponder extends UnimplementedCard {
  constructor (game) {
    super(game, "Ponder", "Commander 2018", "C18");
  }
}

module.exports = Ponder;
