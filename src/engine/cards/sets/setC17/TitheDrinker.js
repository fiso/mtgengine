"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitheDrinker extends UnimplementedCard {
  constructor (game) {
    super(game, "Tithe Drinker", "Commander 2017", "C17");
  }
}

module.exports = TitheDrinker;
