"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireDiamond extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire Diamond", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = FireDiamond;
