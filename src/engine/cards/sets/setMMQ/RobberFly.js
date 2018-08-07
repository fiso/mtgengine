"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RobberFly extends UnimplementedCard {
  constructor (game) {
    super(game, "Robber Fly", "Mercadian Masques", "MMQ");
  }
}

module.exports = RobberFly;
