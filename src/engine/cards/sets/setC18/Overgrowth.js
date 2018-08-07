"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overgrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Overgrowth", "Commander 2018", "C18");
  }
}

module.exports = Overgrowth;
