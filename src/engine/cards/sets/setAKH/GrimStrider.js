"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Grim Strider", "Amonkhet", "AKH");
  }
}

module.exports = GrimStrider;
