"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BadRiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Bad River", "Vintage Masters", "VMA");
  }
}

module.exports = BadRiver;
