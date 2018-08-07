"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Falter extends UnimplementedCard {
  constructor (game) {
    super(game, "Falter", "Vintage Masters", "VMA");
  }
}

module.exports = Falter;
