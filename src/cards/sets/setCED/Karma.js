"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Karma extends UnimplementedCard {
  constructor (game) {
    super(game, "Karma", "Collector's Edition", "CED");
  }
}

module.exports = Karma;
