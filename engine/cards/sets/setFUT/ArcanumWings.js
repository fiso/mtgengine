"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcanumWings extends UnimplementedCard {
  constructor(game) {
    super(game, "Arcanum Wings", "Future Sight", "FUT");
  }
}

module.exports = ArcanumWings;
