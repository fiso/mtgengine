"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bearscape extends UnimplementedCard {
  constructor(game) {
    super(game, "Bearscape", "Odyssey", "ODY");
  }
}

module.exports = Bearscape;
