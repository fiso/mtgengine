"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sacrifice extends UnimplementedCard {
  constructor(game) {
    super(game, "Sacrifice", "Collector's Edition", "CED");
  }
}

module.exports = Sacrifice;
