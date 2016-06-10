"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SliverQueen extends UnimplementedCard {
  constructor (game) {
    super(game, "Sliver Queen", "Stronghold", "STH");
  }
}

module.exports = SliverQueen;
