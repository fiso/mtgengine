"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Jump extends UnimplementedCard {
  constructor (game) {
    super(game, "Jump", "Collector's Edition", "CED");
  }
}

module.exports = Jump;
