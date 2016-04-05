"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conservator extends UnimplementedCard {
  constructor(game) {
    super(game, "Conservator", "Collector's Edition", "CED");
  }
}

module.exports = Conservator;
