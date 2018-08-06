"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimFlayer extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Flayer", "Eldritch Moon", "EMN");
  }
}

module.exports = GrimFlayer;
