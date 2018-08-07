"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimetoReflect extends UnimplementedCard {
  constructor (game) {
    super(game, "Time to Reflect", "Amonkhet", "AKH");
  }
}

module.exports = TimetoReflect;
