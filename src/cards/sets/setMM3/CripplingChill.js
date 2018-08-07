"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CripplingChill extends UnimplementedCard {
  constructor (game) {
    super(game, "Crippling Chill", "Modern Masters 2017", "MM3");
  }
}

module.exports = CripplingChill;
