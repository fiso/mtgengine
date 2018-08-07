"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Duplicant extends UnimplementedCard {
  constructor (game) {
    super(game, "Duplicant", "Commander 2018", "C18");
  }
}

module.exports = Duplicant;
