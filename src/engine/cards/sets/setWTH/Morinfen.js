"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Morinfen extends UnimplementedCard {
  constructor (game) {
    super(game, "Morinfen", "Weatherlight", "WTH");
  }
}

module.exports = Morinfen;
