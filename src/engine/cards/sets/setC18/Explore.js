"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Explore extends UnimplementedCard {
  constructor (game) {
    super(game, "Explore", "Commander 2018", "C18");
  }
}

module.exports = Explore;
