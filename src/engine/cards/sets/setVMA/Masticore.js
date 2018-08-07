"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Masticore extends UnimplementedCard {
  constructor (game) {
    super(game, "Masticore", "Vintage Masters", "VMA");
  }
}

module.exports = Masticore;
