"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Boulderfall extends UnimplementedCard {
  constructor(game) {
    super(game, "Boulderfall", "Theros", "THS");
  }
}

module.exports = Boulderfall;
