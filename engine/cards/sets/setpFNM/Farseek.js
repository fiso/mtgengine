"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Farseek extends UnimplementedCard {
  constructor(game) {
    super(game, "Farseek", "Friday Night Magic", "pFNM");
  }
}

module.exports = Farseek;
