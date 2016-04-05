"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Contemplation extends UnimplementedCard {
  constructor(game) {
    super(game, "Contemplation", "Stronghold", "STH");
  }
}

module.exports = Contemplation;
