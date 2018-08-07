"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conservator extends UnimplementedCard {
  constructor (game) {
    super(game, "Conservator", "Fourth Edition", "4ED");
  }
}

module.exports = Conservator;
