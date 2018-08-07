"use strict";
const Constants = require ("../../../Constants");
const HealBase = require("../setME3/Heal");

class Heal extends HealBase {
  constructor (game) {
    super(game, "Heal", "Ice Age", "ICE");
  }
}

module.exports = Heal;
