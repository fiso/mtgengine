"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourageousOutrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Courageous Outrider", "Eldritch Moon", "EMN");
  }
}

module.exports = CourageousOutrider;
