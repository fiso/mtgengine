"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorgueThrull extends UnimplementedCard {
  constructor(game) {
    super(game, "Morgue Thrull", "Stronghold", "STH");
  }
}

module.exports = MorgueThrull;
