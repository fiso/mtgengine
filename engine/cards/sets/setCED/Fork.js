"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fork extends UnimplementedCard {
  constructor(game) {
    super(game, "Fork", "Collector's Edition", "CED");
  }
}

module.exports = Fork;
