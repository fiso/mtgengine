"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggFanatic extends UnimplementedCard {
  constructor (game) {
    super(game, "Mogg Fanatic", "Eternal Masters", "EMA");
  }
}

module.exports = MoggFanatic;
