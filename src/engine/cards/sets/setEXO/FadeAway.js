"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FadeAway extends UnimplementedCard {
  constructor (game) {
    super(game, "Fade Away", "Exodus", "EXO");
  }
}

module.exports = FadeAway;
