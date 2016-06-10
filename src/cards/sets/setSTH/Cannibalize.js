"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cannibalize extends UnimplementedCard {
  constructor (game) {
    super(game, "Cannibalize", "Stronghold", "STH");
  }
}

module.exports = Cannibalize;
