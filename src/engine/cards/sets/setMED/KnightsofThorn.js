"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightsofThorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Knights of Thorn", "Masters Edition", "MED");
  }
}

module.exports = KnightsofThorn;
