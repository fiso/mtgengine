"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeroesBane extends UnimplementedCard {
  constructor (game) {
    super(game, "Heroes' Bane", "Iconic Masters", "IMA");
  }
}

module.exports = HeroesBane;
