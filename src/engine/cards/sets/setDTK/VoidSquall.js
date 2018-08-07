"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidSquall extends UnimplementedCard {
  constructor (game) {
    super(game, "Void Squall", "Dragons of Tarkir", "DTK");
  }
}

module.exports = VoidSquall;
