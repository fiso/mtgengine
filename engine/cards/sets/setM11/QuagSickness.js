"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuagSickness extends UnimplementedCard {
  constructor(game) {
    super(game, "Quag Sickness", "Magic 2011", "M11");
  }
}

module.exports = QuagSickness;
