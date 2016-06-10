"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherFlash extends UnimplementedCard {
  constructor (game) {
    super(game, "Æther Flash", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AetherFlash;
