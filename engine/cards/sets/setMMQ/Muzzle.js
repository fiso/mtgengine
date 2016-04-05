"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Muzzle extends UnimplementedCard {
  constructor(game) {
    super(game, "Muzzle", "Mercadian Masques", "MMQ");
  }
}

module.exports = Muzzle;
