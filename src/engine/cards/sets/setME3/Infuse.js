"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Infuse extends UnimplementedCard {
  constructor (game) {
    super(game, "Infuse", "Masters Edition III", "ME3");
  }
}

module.exports = Infuse;
