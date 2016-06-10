"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReflectDamage extends UnimplementedCard {
  constructor (game) {
    super(game, "Reflect Damage", "Mirage", "MIR");
  }
}

module.exports = ReflectDamage;
