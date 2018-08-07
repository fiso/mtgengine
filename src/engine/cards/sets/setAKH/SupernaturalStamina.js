"use strict";
const Constants = require ("../../../Constants");
const SupernaturalStaminaBase = require("../setA25/SupernaturalStamina");

class SupernaturalStamina extends SupernaturalStaminaBase {
  constructor (game) {
    super(game, "Supernatural Stamina", "Amonkhet", "AKH");
  }
}

module.exports = SupernaturalStamina;
