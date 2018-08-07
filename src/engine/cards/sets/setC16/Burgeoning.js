"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Burgeoning extends UnimplementedCard {
  constructor (game) {
    super(game, "Burgeoning", "Commander 2016", "C16");
  }
}

module.exports = Burgeoning;
