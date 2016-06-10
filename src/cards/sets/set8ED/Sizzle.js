"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sizzle extends UnimplementedCard {
  constructor (game) {
    super(game, "Sizzle", "Eighth Edition", "8ED");
  }
}

module.exports = Sizzle;
