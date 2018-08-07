"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrimsChant extends UnimplementedCard {
  constructor (game) {
    super(game, "Orim's Chant", "Judge Gift Cards 2008", "G08");
  }
}

module.exports = OrimsChant;
