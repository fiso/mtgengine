"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SplendidAgony extends UnimplementedCard {
  constructor (game) {
    super(game, "Splendid Agony", "Amonkhet", "AKH");
  }
}

module.exports = SplendidAgony;
