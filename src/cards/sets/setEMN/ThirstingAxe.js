"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThirstingAxe extends UnimplementedCard {
  constructor (game) {
    super(game, "Thirsting Axe", "Eldritch Moon", "EMN");
  }
}

module.exports = ThirstingAxe;
