"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bayou extends UnimplementedCard {
  constructor(game) {
    super(game, "Bayou", "Collector's Edition", "CED");
  }
}

module.exports = Bayou;
