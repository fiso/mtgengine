"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlyingCarpet extends UnimplementedCard {
  constructor (game) {
    super(game, "Flying Carpet", "Masters Edition IV", "ME4");
  }
}

module.exports = FlyingCarpet;
