"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Karma extends UnimplementedCard {
  constructor (game) {
    super(game, "Karma", "Eighth Edition", "8ED");
  }
}

module.exports = Karma;
