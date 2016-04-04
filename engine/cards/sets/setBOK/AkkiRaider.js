"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkkiRaider extends UnimplementedCard {
  constructor(game) {
    super(game, "Akki Raider", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = AkkiRaider;
