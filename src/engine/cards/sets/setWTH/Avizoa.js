"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Avizoa extends UnimplementedCard {
  constructor (game) {
    super(game, "Avizoa", "Weatherlight", "WTH");
  }
}

module.exports = Avizoa;
