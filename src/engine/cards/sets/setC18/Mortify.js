"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mortify extends UnimplementedCard {
  constructor (game) {
    super(game, "Mortify", "Commander 2018", "C18");
  }
}

module.exports = Mortify;
