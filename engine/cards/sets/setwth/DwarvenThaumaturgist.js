"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenThaumaturgist extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Thaumaturgist", "Weatherlight", "WTH");
  }
}

module.exports = DwarvenThaumaturgist;
