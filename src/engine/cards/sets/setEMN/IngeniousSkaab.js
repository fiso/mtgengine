"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IngeniousSkaab extends UnimplementedCard {
  constructor (game) {
    super(game, "Ingenious Skaab", "Eldritch Moon", "EMN");
  }
}

module.exports = IngeniousSkaab;
