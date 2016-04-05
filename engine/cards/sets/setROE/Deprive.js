"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deprive extends UnimplementedCard {
  constructor(game) {
    super(game, "Deprive", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Deprive;
