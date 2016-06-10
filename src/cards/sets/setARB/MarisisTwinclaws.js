"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarisisTwinclaws extends UnimplementedCard {
  constructor (game) {
    super(game, "Marisi's Twinclaws", "Alara Reborn", "ARB");
  }
}

module.exports = MarisisTwinclaws;
