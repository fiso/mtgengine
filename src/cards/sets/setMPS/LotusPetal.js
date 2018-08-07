"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LotusPetal extends UnimplementedCard {
  constructor (game) {
    super(game, "Lotus Petal", "Kaladesh Inventions", "MPS");
  }
}

module.exports = LotusPetal;
