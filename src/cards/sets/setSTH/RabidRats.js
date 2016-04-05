"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RabidRats extends UnimplementedCard {
  constructor(game) {
    super(game, "Rabid Rats", "Stronghold", "STH");
  }
}

module.exports = RabidRats;
