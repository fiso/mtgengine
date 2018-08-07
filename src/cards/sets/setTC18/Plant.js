"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plant extends UnimplementedCard {
  constructor (game) {
    super(game, "Plant", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Plant;
