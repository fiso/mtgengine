"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReflectDamage extends Card {
  constructor(game) {
    super(game, "Reflect Damage", "Mirage", "MIR");
  }
}

module.exports = ReflectDamage;
