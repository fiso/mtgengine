"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LunarchMantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Lunarch Mantle", "Eldritch Moon", "EMN");
  }
}

module.exports = LunarchMantle;
