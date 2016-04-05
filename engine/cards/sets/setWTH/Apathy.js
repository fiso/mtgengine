"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Apathy extends UnimplementedCard {
  constructor(game) {
    super(game, "Apathy", "Weatherlight", "WTH");
  }
}

module.exports = Apathy;
