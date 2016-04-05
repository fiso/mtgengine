"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Joven extends UnimplementedCard {
  constructor(game) {
    super(game, "Joven", "Homelands", "HML");
  }
}

module.exports = Joven;
