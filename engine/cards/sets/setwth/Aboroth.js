"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aboroth extends UnimplementedCard {
  constructor(game) {
    super(game, "Aboroth", "Weatherlight", "WTH");
  }
}

module.exports = Aboroth;
