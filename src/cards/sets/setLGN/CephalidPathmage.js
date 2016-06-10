"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidPathmage extends UnimplementedCard {
  constructor (game) {
    super(game, "Cephalid Pathmage", "Legions", "LGN");
  }
}

module.exports = CephalidPathmage;
