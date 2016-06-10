"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogardanFirefiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Bogardan Firefiend", "Planechase", "HOP");
  }
}

module.exports = BogardanFirefiend;
