"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VividMarsh extends UnimplementedCard {
  constructor(game) {
    super(game, "Vivid Marsh", "Commander 2013 Edition", "C13");
  }
}

module.exports = VividMarsh;
