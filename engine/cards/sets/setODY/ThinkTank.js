"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThinkTank extends UnimplementedCard {
  constructor(game) {
    super(game, "Think Tank", "Odyssey", "ODY");
  }
}

module.exports = ThinkTank;
