"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Taiga extends UnimplementedCard {
  constructor(game) {
    super(game, "Taiga", "Collector's Edition", "CED");
  }
}

module.exports = Taiga;
