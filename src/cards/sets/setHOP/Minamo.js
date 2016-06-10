"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Minamo extends UnimplementedCard {
  constructor (game) {
    super(game, "Minamo", "Planechase", "HOP");
  }
}

module.exports = Minamo;
