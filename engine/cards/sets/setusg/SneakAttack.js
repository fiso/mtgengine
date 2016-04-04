"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SneakAttackBase = require("../setpJGP/SneakAttack.js");

class SneakAttack extends SneakAttackBase {
  constructor(game) {
    super(game, "Sneak Attack", "Urza's Saga", "USG");
  }
}

module.exports = SneakAttack;
