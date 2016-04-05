"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcticWolves extends UnimplementedCard {
  constructor(game) {
    super(game, "Arctic Wolves", "Weatherlight", "WTH");
  }
}

module.exports = ArcticWolves;
