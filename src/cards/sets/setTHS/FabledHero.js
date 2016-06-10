"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FabledHero extends UnimplementedCard {
  constructor (game) {
    super(game, "Fabled Hero", "Theros", "THS");
  }
}

module.exports = FabledHero;
