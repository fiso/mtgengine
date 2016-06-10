"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Awakening extends UnimplementedCard {
  constructor (game) {
    super(game, "Awakening", "Stronghold", "STH");
  }
}

module.exports = Awakening;
