"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JustDesserts extends UnimplementedCard {
  constructor (game) {
    super(game, "Just Desserts", "Unstable", "UST");
  }
}

module.exports = JustDesserts;
