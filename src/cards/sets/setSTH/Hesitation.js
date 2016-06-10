"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hesitation extends UnimplementedCard {
  constructor (game) {
    super(game, "Hesitation", "Stronghold", "STH");
  }
}

module.exports = Hesitation;
