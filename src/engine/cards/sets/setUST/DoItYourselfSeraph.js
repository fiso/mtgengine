"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoItYourselfSeraph extends UnimplementedCard {
  constructor (game) {
    super(game, "Do-It-Yourself Seraph", "Unstable", "UST");
  }
}

module.exports = DoItYourselfSeraph;
