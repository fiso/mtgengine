"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cockatrice extends UnimplementedCard {
  constructor (game) {
    super(game, "Cockatrice", "Collector's Edition", "CED");
  }
}

module.exports = Cockatrice;
