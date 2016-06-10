"use strict";
const Constants = require ("../../../Constants");
const HealBase = require("../set5ED/Heal");

class Heal extends HealBase {
  constructor (game) {
    super(game, "Heal", "Masters Edition III", "ME3");
  }
}

module.exports = Heal;
