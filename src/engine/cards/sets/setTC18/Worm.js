"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Worm extends UnimplementedCard {
  constructor (game) {
    super(game, "Worm", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Worm;
