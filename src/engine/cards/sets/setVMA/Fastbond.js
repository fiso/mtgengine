"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fastbond extends UnimplementedCard {
  constructor (game) {
    super(game, "Fastbond", "Vintage Masters", "VMA");
  }
}

module.exports = Fastbond;
