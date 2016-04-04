"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FesteringEvil extends UnimplementedCard {
  constructor(game) {
    super(game, "Festering Evil", "Weatherlight", "WTH");
  }
}

module.exports = FesteringEvil;
