"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Jinx extends UnimplementedCard {
  constructor(game) {
    super(game, "Jinx", "Homelands", "HML");
  }
}

module.exports = Jinx;
