"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disfigure extends UnimplementedCard {
  constructor (game) {
    super(game, "Disfigure", "Masters 25", "A25");
  }
}

module.exports = Disfigure;
