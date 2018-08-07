"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel of Light", "Masters Edition II", "ME2");
  }
}

module.exports = AngelofLight;
