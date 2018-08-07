"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerumTank extends UnimplementedCard {
  constructor (game) {
    super(game, "Serum Tank", "Planechase", "HOP");
  }
}

module.exports = SerumTank;
