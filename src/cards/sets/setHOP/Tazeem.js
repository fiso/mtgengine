"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tazeem extends UnimplementedCard {
  constructor (game) {
    super(game, "Tazeem", "Planechase", "HOP");
  }
}

module.exports = Tazeem;
