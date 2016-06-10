"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildJhovall extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Jhovall", "Mercadian Masques", "MMQ");
  }
}

module.exports = WildJhovall;
