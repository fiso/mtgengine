"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldSphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Shield Sphere", "Masters Edition", "MED");
  }
}

module.exports = ShieldSphere;
