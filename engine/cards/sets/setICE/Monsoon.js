"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Monsoon extends UnimplementedCard {
  constructor(game) {
    super(game, "Monsoon", "Ice Age", "ICE");
  }
}

module.exports = Monsoon;
