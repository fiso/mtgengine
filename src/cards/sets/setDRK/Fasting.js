"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fasting extends UnimplementedCard {
  constructor(game) {
    super(game, "Fasting", "The Dark", "DRK");
  }
}

module.exports = Fasting;
