"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Berserk extends UnimplementedCard {
  constructor(game) {
    super(game, "Berserk", "Collector's Edition", "CED");
  }
}

module.exports = Berserk;
