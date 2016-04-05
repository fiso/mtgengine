"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necratog extends UnimplementedCard {
  constructor(game) {
    super(game, "Necratog", "Weatherlight", "WTH");
  }
}

module.exports = Necratog;
