"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Hidden Horror", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HiddenHorror;
