"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Abjure extends UnimplementedCard {
  constructor(game) {
    super(game, "Abjure", "Weatherlight", "WTH");
  }
}

module.exports = Abjure;
